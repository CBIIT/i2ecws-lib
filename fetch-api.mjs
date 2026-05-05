#!/usr/bin/env node
/**
 * fetch-api.mjs — copies OpenAPI specs from local service build targets
 *
 * For each I2E service spec in specs.yaml (those with a `source` field),
 * reads swagger.json from the Maven build output and writes it as YAML
 * to api-specs/<name>.yaml.
 *
 * Usage:
 *   node fetch-api.mjs [--spec <name>] [--dry-run]
 *   npm run fetch -- [options]
 *
 * Environment:
 *   WORKSPACE_ROOT   Root of the dev workspaces directory.
 *                    Defaults to two levels above this project's directory,
 *                    i.e. swagger-codegen-workspace/i2ecws-lib/../../  →  workspaces/
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { parseArgs } from 'util';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));

const { values: args } = parseArgs({
  options: {
    spec:      { type: 'string',  short: 's' },
    'dry-run': { type: 'boolean', short: 'd', default: false },
    help:      { type: 'boolean', short: 'h', default: false },
  },
  allowPositionals: false,
  strict: true,
});

if (args.help) {
  console.log(`
Usage: node fetch-api.mjs [options]
       npm run fetch -- [options]

Copies swagger.json from each service's Maven build target and writes it as
YAML to api-specs/. Requires services to have been built locally first.

Options:
  -s, --spec <name>   Fetch only this spec (default: all specs with a source field)
  -d, --dry-run       Print source → destination paths without copying
  -h, --help          Show this help

Environment:
  WORKSPACE_ROOT      Root workspaces directory (default: ../../ from project root)
`);
  process.exit(0);
}

const workspaceRoot = process.env.WORKSPACE_ROOT ?? resolve(__dirname, '..', '..');
const manifest = yaml.load(readFileSync(resolve(__dirname, 'specs.yaml'), 'utf8'));
const { specs = [] } = manifest;

const fetchable = specs.filter(s => s.source && (!args.spec || s.name === args.spec));

if (args.spec && fetchable.length === 0) {
  console.error(`\x1b[31mError: no spec named "${args.spec}" with a source field found in specs.yaml\x1b[0m`);
  process.exit(1);
}

let succeeded = 0;
let failed = 0;

for (const spec of fetchable) {
  const srcPath  = join(workspaceRoot, spec.source, 'target', 'swagger', 'swagger.json');
  const destPath = resolve(__dirname, 'api-specs', `${spec.name}.yaml`);

  console.log(`\n\x1b[36m▶ ${spec.name}\x1b[0m`);
  console.log(`  src:  ${srcPath}`);
  console.log(`  dest: ${destPath}`);

  if (args['dry-run']) continue;

  if (!existsSync(srcPath)) {
    console.error(`  \x1b[31m✗ Source not found — has the service been built? (mvnw clean package)\x1b[0m`);
    failed++;
    process.exitCode = 1;
    continue;
  }

  try {
    const obj = JSON.parse(readFileSync(srcPath, 'utf8'));
    writeFileSync(destPath, yaml.dump(obj, { lineWidth: -1 }));
    console.log(`  \x1b[32m✓ Written\x1b[0m`);
    succeeded++;
  } catch (err) {
    console.error(`  \x1b[31m✗ Failed: ${err.message}\x1b[0m`);
    failed++;
    process.exitCode = 1;
  }
}

if (!args['dry-run']) {
  const parts = [];
  if (succeeded > 0) parts.push(`\x1b[32m${succeeded} succeeded\x1b[0m`);
  if (failed    > 0) parts.push(`\x1b[31m${failed} failed\x1b[0m`);
  console.log(`\n${fetchable.length} spec(s): ${parts.join(', ')}`);
}
