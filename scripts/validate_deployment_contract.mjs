import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const workflowPath = path.join(root, '.github/workflows/deploy-website.yml');
const vercelPath = path.join(root, 'vercel.json');
const workflow = fs.readFileSync(workflowPath, 'utf8');
const config = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));

const fail = (message) => {
  console.error(`Deployment contract violation: ${message}`);
  process.exitCode = 1;
};

const requiredWorkflowFragments = [
  'workflow_dispatch:',
  "if: inputs.target == 'preview'",
  "SITE_INDEXABLE: \"false\"",
  "SHOW_CONTENT_STATUS: \"true\"",
  "if: inputs.target == 'production'",
  "SITE_INDEXABLE: \"true\"",
  "SHOW_CONTENT_STATUS: \"false\"",
  'run: npm run verify',
  'vercel@59.19.1',
  'deploy --prebuilt',
  'deploy --prebuilt --prod',
  'VERCEL_ORG_ID',
  'VERCEL_PROJECT_ID',
  'VERCEL_TOKEN',
];

for (const fragment of requiredWorkflowFragments) {
  if (!workflow.includes(fragment)) fail(`missing required workflow fragment: ${fragment}`);
}

if (workflow.includes('vercel@latest')) fail('release automation must pin Vercel CLI; @latest is prohibited.');

const previewVerify = workflow.indexOf('Verify preview candidate remains non-indexable');
const previewDeploy = workflow.indexOf('Deploy immutable preview');
if (previewVerify < 0 || previewDeploy < 0 || previewVerify > previewDeploy) {
  fail('preview verification must run before preview deployment.');
}

const productionVerify = workflow.indexOf('Verify production candidate passes every public release gate');
const productionDeploy = workflow.indexOf('Deploy production artifact');
if (productionVerify < 0 || productionDeploy < 0 || productionVerify > productionDeploy) {
  fail('production public-release verification must run before production deployment.');
}

if (config.framework !== 'astro') fail('vercel.json framework must remain astro.');
if (config.outputDirectory !== 'dist') fail('vercel.json outputDirectory must remain dist.');
if (config.buildCommand !== 'npm run build') fail('vercel.json buildCommand must use the repository build.');
if (config.installCommand !== 'npm ci') fail('vercel.json installCommand must use npm ci.');

const headers = (config.headers ?? []).flatMap((entry) => entry.headers ?? []);
const headerMap = new Map(headers.map((header) => [header.key.toLowerCase(), header.value]));
for (const key of ['x-content-type-options', 'x-frame-options', 'referrer-policy', 'permissions-policy']) {
  if (!headerMap.has(key)) fail(`missing baseline response header: ${key}`);
}

if (!process.exitCode) {
  console.log('Deployment contract OK: preview stays non-indexable; production remains release-gated; Vercel CLI is pinned.');
}
