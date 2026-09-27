import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const src = join(root, 'src');
const allowedHexFile = join(src, 'styles', 'tokens.css');
const extensions = new Set(['.astro', '.css', '.ts']);

const violations = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path);
    else if (extensions.has(extname(path))) validate(path);
  }
}

function report(path, line, rule, snippet) {
  violations.push({
    file: relative(root, path),
    line,
    rule,
    snippet: snippet.trim(),
  });
}

function validate(path) {
  const text = readFileSync(path, 'utf8');
  const lines = text.split(/\r?\n/);

  lines.forEach((lineText, index) => {
    const line = index + 1;

    if (path !== allowedHexFile) {
      const withoutAnchors = lineText.replace(/href\s*=\s*["'][^"']*["']/g, '');
      if (/(^|[^\w-])#[0-9a-fA-F]{3,8}\b/.test(withoutAnchors)) {
        report(path, line, 'color-token', lineText);
      }
      if (/\b(?:rgb|rgba|hsl|hsla)\s*\(/i.test(lineText)) {
        report(path, line, 'color-token', lineText);
      }
    }

    if (/\btransition\s*:\s*all\b/i.test(lineText)) {
      report(path, line, 'transition-all', lineText);
    }

    if (/\bbox-shadow\s*:/i.test(lineText)) {
      report(path, line, 'shadow-policy', lineText);
    }

    if (/\bborder-radius\s*:/i.test(lineText) && !/var\(--radius-|50%/.test(lineText)) {
      report(path, line, 'radius-token', lineText);
    }

    if (/https?:\/\/[^)'"]+\.(?:css|woff2?|ttf|otf)(?:[?)'"]|$)/i.test(lineText)) {
      report(path, line, 'external-style-font', lineText);
    }
  });
}

walk(src);

if (violations.length) {
  console.error('Design-system contract FAILED:');
  for (const v of violations) {
    console.error(`- ${v.file}:${v.line} [${v.rule}] ${v.snippet}`);
  }
  process.exit(1);
}

console.log('Design-system contract OK');
console.log('Checked production Astro/CSS/TS for token, radius, shadow and dependency drift.');
