import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SEARCH_ROOTS = ['src'];
const EXTENSIONS = new Set(['.ts', '.tsx']);

// Legacy tokens to block in UI copy (UI layer only)
const TOKENS = [
  'insured',
  'insur',
  'bonded',
  'insurance'
];

const EXCEPTION_GLOBS = [
  path.join('src', 'copy', 'trustAssurance.ts'),
  path.join('src', 'pages', 'PrivacyPolicy.tsx'),
  path.join('src', 'pages', 'TermsOfService.tsx'),
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function isTsOrTsx(file) {
  return EXTENSIONS.has(path.extname(file));
}

function shouldSkip(file) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  return EXCEPTION_GLOBS.some((g) => rel === g.replace(/\\/g, '/'));
}


function matchesAnyToken(text) {
  const lower = text.toLowerCase();
  return TOKENS.some((t) => lower.includes(t));
}

let failures = [];

for (const r of SEARCH_ROOTS) {
  const abs = path.join(ROOT, r);
  if (!fs.existsSync(abs)) continue;

  const files = walk(abs).filter(isTsOrTsx);
  for (const file of files) {
    if (shouldSkip(file)) continue;

    const txt = fs.readFileSync(file, 'utf8');
    if (!matchesAnyToken(txt)) continue;

    failures.push(path.relative(ROOT, file).replace(/\\/g, '/'));
  }
}

if (failures.length) {
  console.error('Trust-term guard failed. Legacy tokens found in UI layer files:');
  for (const f of failures) console.error(' - ' + f);
  console.error('\nTokens blocked (case-insensitive): ' + TOKENS.join(', '));
  console.error('Exception allowed only: src/copy/trustAssurance.ts');
  process.exit(1);
}

console.log('Trust-term guard passed (no legacy tokens found in UI layer).');

