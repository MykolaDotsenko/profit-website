import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const contentRoot = join(root, 'src', 'content', 'en');
const extensions = new Set(['.ts']);

const forbidden = [
  { pattern: /\bAI-powered\b/i, reason: 'generic AI marketing claim' },
  { pattern: /\bguaranteed profit\b/i, reason: 'unsupported economic guarantee' },
  { pattern: /\bguaranteed savings\b/i, reason: 'unsupported economic guarantee' },
  { pattern: /\bmarket leader(?:ship)?\b/i, reason: 'leadership claim without evidence' },
  { pattern: /\bindustry-leading\b/i, reason: 'comparative superiority claim without evidence' },
  { pattern: /\bbest-in-class\b/i, reason: 'comparative superiority claim without evidence' },
  { pattern: /\brevolutionary\b/i, reason: 'hype language' },
  { pattern: /\bgame[- ]changing\b/i, reason: 'hype language' },
  { pattern: /\b100% accurate\b/i, reason: 'unsupported accuracy claim' },
  { pattern: /\bfully autonomous\b/i, reason: 'automation claim outside current product truth' },
];

const violations = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path);
    else if (extensions.has(extname(path))) validate(path);
  }
}

function validate(path) {
  const lines = readFileSync(path, 'utf8').split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const rule of forbidden) {
      if (rule.pattern.test(line)) {
        violations.push(`${relative(root, path)}:${index + 1}: ${rule.reason}: ${line.trim()}`);
      }
    }
  });
}

walk(contentRoot);

if (violations.length) {
  console.error('Claim hygiene FAILED:');
  console.error(violations.join('\n'));
  process.exit(1);
}

console.log('Claim hygiene OK');
console.log('Checked English production content for unsupported hype and superiority claims.');
