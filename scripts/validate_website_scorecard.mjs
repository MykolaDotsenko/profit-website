import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const scorecardPath = path.join(root, 'docs/release/website-100-scorecard.json');
const releasePath = path.join(root, 'src/config/release.ts');

const fail = (message) => {
  console.error(`Scorecard contract violation: ${message}`);
  process.exitCode = 1;
};

const scorecard = JSON.parse(fs.readFileSync(scorecardPath, 'utf8'));
const releaseSource = fs.readFileSync(releasePath, 'utf8');

if (scorecard?.schema_version !== '1.0') fail('schema_version must be 1.0.');
if (!Array.isArray(scorecard?.categories)) fail('categories must be an array.');

const categories = scorecard.categories ?? [];
if (categories.length !== 10) fail(`expected 10 categories, found ${categories.length}.`);

const categoryIds = new Set();
const criterionIds = new Set();
const mappedGates = new Set();
let totalPoints = 0;
let totalCriteria = 0;

for (const category of categories) {
  if (!category?.id || categoryIds.has(category.id)) fail(`category id missing or duplicated: ${category?.id ?? '<missing>'}.`);
  categoryIds.add(category.id);

  if (category.maximum_points !== 10) fail(`${category.id}: maximum_points must be 10.`);
  if (!Array.isArray(category.criteria) || category.criteria.length !== 5) {
    fail(`${category.id}: expected exactly 5 criteria.`);
    continue;
  }

  let categoryPoints = 0;
  for (const criterion of category.criteria) {
    totalCriteria += 1;
    if (!criterion?.id || criterionIds.has(criterion.id)) fail(`criterion id missing or duplicated: ${criterion?.id ?? '<missing>'}.`);
    criterionIds.add(criterion.id);

    if (criterion.points !== 2) fail(`${criterion.id}: points must be exactly 2.`);
    categoryPoints += criterion.points ?? 0;
    totalPoints += criterion.points ?? 0;

    for (const field of ['title', 'owner', 'evidence_type', 'evidence_required', 'verification']) {
      if (typeof criterion[field] !== 'string' || !criterion[field].trim()) fail(`${criterion.id}: ${field} must be non-empty.`);
    }

    if (!Array.isArray(criterion.release_gates)) fail(`${criterion.id}: release_gates must be an array.`);
    for (const gate of criterion.release_gates ?? []) mappedGates.add(gate);
  }

  if (categoryPoints !== 10) fail(`${category.id}: criteria sum to ${categoryPoints}, expected 10.`);
}

if (totalCriteria !== 50) fail(`expected 50 criteria, found ${totalCriteria}.`);
if (totalPoints !== 100) fail(`expected 100 total points, found ${totalPoints}.`);
if (scorecard?.scoring?.maximum_points !== 100) fail('scoring.maximum_points must be 100.');

const gateIds = [...releaseSource.matchAll(/\bid:\s*'([^']+)'/g)].map((match) => match[1]);
const uniqueGateIds = [...new Set(gateIds)];

for (const gate of uniqueGateIds) {
  if (!mappedGates.has(gate)) fail(`release gate "${gate}" is not mapped to any scorecard criterion.`);
}

for (const gate of mappedGates) {
  if (!uniqueGateIds.includes(gate)) fail(`scorecard references unknown release gate "${gate}".`);
}

if (!process.exitCode) {
  console.log(`Website scorecard contract OK: ${categories.length} categories, ${totalCriteria} criteria, ${totalPoints} points, ${uniqueGateIds.length} release gates mapped.`);
}
