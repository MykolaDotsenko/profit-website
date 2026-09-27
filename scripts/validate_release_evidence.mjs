import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const scorecard = JSON.parse(fs.readFileSync(path.join(root, 'docs/release/website-100-scorecard.json'), 'utf8'));
const registry = JSON.parse(fs.readFileSync(path.join(root, 'docs/release/website-evidence-registry.json'), 'utf8'));
const releaseSource = fs.readFileSync(path.join(root, 'src/config/release.ts'), 'utf8');

const fail = (message) => { console.error(`Release evidence registry violation: ${message}`); process.exitCode = 1; };
const scoreIds = scorecard.categories.flatMap((c) => c.criteria.map((x) => x.id));
const registryIds = registry.criteria.map((x) => x.id);

if (new Set(registryIds).size !== registryIds.length) fail('criterion IDs must be unique.');
if (registryIds.length !== scoreIds.length) fail(`expected ${scoreIds.length} registry criteria, found ${registryIds.length}.`);
for (const id of scoreIds) if (!registryIds.includes(id)) fail(`missing criterion ${id}.`);
for (const id of registryIds) if (!scoreIds.includes(id)) fail(`unknown criterion ${id}.`);

for (const item of registry.criteria) {
  if (!['pass', 'blocked'].includes(item.status)) fail(`${item.id}: invalid status ${item.status}.`);
  if (!Array.isArray(item.evidence)) fail(`${item.id}: evidence must be an array.`);
  if (item.status === 'pass' && item.evidence.length === 0) fail(`${item.id}: PASS requires evidence references.`);
  if (item.status === 'blocked' && (!item.blocker?.trim() || !item.closure_action?.trim())) fail(`${item.id}: BLOCKED requires blocker and closure_action.`);
}

const passed = registry.criteria.filter((x) => x.status === 'pass').length;
const score = passed * 2;
if (registry.scoring.current_pass_criteria !== passed) fail(`stored pass count ${registry.scoring.current_pass_criteria} != computed ${passed}.`);
if (registry.scoring.current_score !== score) fail(`stored score ${registry.scoring.current_score} != computed ${score}.`);
if (registry.criteria.length !== 50 || scorecard.scoring.maximum_points !== 100) fail('canonical 50-criterion / 100-point contract drifted.');

const blockedGateIds = [...releaseSource.matchAll(/id:\s*'([^']+)'[\s\S]*?state:\s*'blocked'/g)].map((m) => m[1]);
const gateToCriteria = new Map();
for (const category of scorecard.categories) for (const criterion of category.criteria) for (const gate of criterion.release_gates ?? []) {
  if (!gateToCriteria.has(gate)) gateToCriteria.set(gate, []);
  gateToCriteria.get(gate).push(criterion.id);
}
for (const gate of blockedGateIds) {
  const ids = gateToCriteria.get(gate) ?? [];
  for (const id of ids) {
    const item = registry.criteria.find((x) => x.id === id);
    if (item?.status === 'pass') fail(`${id}: cannot PASS while dependent release gate ${gate} is BLOCKED.`);
  }
}

if (score === 100 && blockedGateIds.length) fail('100/100 is prohibited while release gates remain blocked.');

if (!process.exitCode) console.log(`Release evidence registry OK: ${passed}/50 criteria PASS = ${score}/100; ${50-passed} BLOCKED.`);
