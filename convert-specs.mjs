#!/usr/bin/env node
/**
 * Converts JSON OpenAPI specs in api-specs/ to YAML format.
 * Skips specs that already have a .yaml counterpart.
 * Usage: node convert-specs.mjs
 *    or: npm run convert-specs
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const specsDir = resolve(__dirname, 'api-specs');

const jsonFiles = readdirSync(specsDir)
  .filter(f => f.endsWith('.json'))
  .sort();

let converted = 0;
let skipped = 0;

for (const file of jsonFiles) {
  const jsonPath = resolve(specsDir, file);
  const yamlPath = jsonPath.replace(/\.json$/, '.yaml');

  if (existsSync(yamlPath)) {
    console.log(`  Skipped (YAML exists): ${file}`);
    skipped++;
    continue;
  }

  try {
    const obj = JSON.parse(readFileSync(jsonPath, 'utf8'));
    writeFileSync(yamlPath, yaml.dump(obj, { lineWidth: -1 }));
    console.log(`\x1b[32m  Converted: ${file}\x1b[0m`);
    converted++;
  } catch (err) {
    console.error(`\x1b[31m  FAILED: ${file} — ${err.message}\x1b[0m`);
    process.exitCode = 1;
  }
}

console.log(`\nDone. ${converted} converted, ${skipped} skipped.`);
