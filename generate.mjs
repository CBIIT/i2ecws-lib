#!/usr/bin/env node
/**
 * generate.mjs — unified API-first code generation script
 *
 * Reads specs.yaml, merges defaults with per-spec target config, and calls
 * openapi-generator-cli for each enabled spec/target combination.
 *
 * Usage:
 *   node generate.mjs [options]
 *   npm run generate -- [options]
 *
 * Options:
 *   -s, --spec   <name>   Generate only this spec (default: all specs)
 *   -t, --target <type>   Generate only this target type (default: all enabled)
 *                         Values: typescript-angular | java-client | java-server
 *   -d, --dry-run         Print commands without executing
 *   -l, --list            List all specs and their enabled targets, then exit
 *   -h, --help            Show this help, then exit
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { parseArgs } from 'util';
import { tmpdir } from 'os';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));

// openapi-generator-cli generator name for each target type
const GENERATOR_NAME = {
  'typescript-angular': 'typescript-angular',
  'java-client':        'java',
  'java-server':        'spring',
};

// Template directory for each target type (populated after template rename task)
const TEMPLATE_DIR = {
  'typescript-angular': resolve(__dirname, 'templates', 'typescript-angular'),
  'java-client':        resolve(__dirname, 'templates', 'java-client'),
  'java-server':        resolve(__dirname, 'templates', 'java-server'),
};

const VALID_TARGETS = Object.keys(GENERATOR_NAME);

// ---------------------------------------------------------------------------
// Parse arguments
// ---------------------------------------------------------------------------
const { values: args } = parseArgs({
  options: {
    spec:      { type: 'string',  short: 's' },
    target:    { type: 'string',  short: 't' },
    'dry-run': { type: 'boolean', short: 'd', default: false },
    list:      { type: 'boolean', short: 'l', default: false },
    help:      { type: 'boolean', short: 'h', default: false },
  },
  allowPositionals: false,
  strict: true,
});

if (args.help) {
  console.log(`
Usage: node generate.mjs [options]
       npm run generate -- [options]

Options:
  -s, --spec <name>    Generate only this spec (default: all specs)
  -t, --target <type>  Generate only this target (default: all enabled targets)
                       Values: ${VALID_TARGETS.join(' | ')}
  -d, --dry-run        Print commands without executing
  -l, --list           List all specs and their enabled targets
  -h, --help           Show this help
`);
  process.exit(0);
}

if (args.target && !GENERATOR_NAME[args.target]) {
  console.error(`\x1b[31mError: unknown target "${args.target}". Valid values: ${VALID_TARGETS.join(', ')}\x1b[0m`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Load specs.yaml
// ---------------------------------------------------------------------------
const manifest = yaml.load(readFileSync(resolve(__dirname, 'specs.yaml'), 'utf8'));
const { defaults = {}, specs = [] } = manifest;

// ---------------------------------------------------------------------------
// --list mode
// ---------------------------------------------------------------------------
if (args.list) {
  const nameWidth = Math.max(...specs.map(s => s.name.length));
  console.log('');
  for (const spec of specs) {
    const targets = Object.keys(spec.targets || {}).join(', ');
    console.log(`  ${spec.name.padEnd(nameWidth)}  [${targets}]`);
  }
  console.log('');
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Filter specs
// ---------------------------------------------------------------------------
const selectedSpecs = args.spec ? specs.filter(s => s.name === args.spec) : specs;

if (args.spec && selectedSpecs.length === 0) {
  console.error(`\x1b[31mError: no spec named "${args.spec}" found in specs.yaml\x1b[0m`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Merge helper: spread defaults with per-spec overrides
// ---------------------------------------------------------------------------
function buildConfig(targetType, specTargetConfig) {
  return { ...(defaults[targetType] ?? {}), ...(specTargetConfig ?? {}) };
}

// ---------------------------------------------------------------------------
// Generate
// ---------------------------------------------------------------------------
let succeeded = 0;
let failed = 0;
let skipped = 0;

for (const spec of selectedSpecs) {
  const targetTypes = args.target
    ? (spec.targets?.[args.target] !== undefined ? [args.target] : [])
    : Object.keys(spec.targets ?? {});

  if (targetTypes.length === 0) {
    if (args.target) {
      console.log(`  \x1b[33mSkip\x1b[0m  ${spec.name} — target "${args.target}" not enabled for this spec`);
      skipped++;
    }
    continue;
  }

  for (const targetType of targetTypes) {
    const generator  = GENERATOR_NAME[targetType];
    const specFile   = resolve(__dirname, spec.spec);
    const outputDir  = resolve(__dirname, 'output', spec.name, targetType);
    const templateDir = TEMPLATE_DIR[targetType];
    const config     = buildConfig(targetType, spec.targets[targetType]);

    // Build command array
    const cmdParts = [
      'npx', 'openapi-generator-cli', 'generate',
      '-i', specFile,
      '-g', generator,
      '-o', outputDir,
    ];

    const tmpConfigPath = join(tmpdir(), `i2ecws-${spec.name}-${targetType}.json`);

    console.log(`\n\x1b[36m▶ ${spec.name} / ${targetType}\x1b[0m`);

    if (existsSync(templateDir)) {
      cmdParts.push('-t', templateDir);
    } else {
      console.log(`  \x1b[33mNote:\x1b[0m template dir not found for ${targetType} — using generator defaults`);
    }

    cmdParts.push('-c', tmpConfigPath);

    const displayCmd = cmdParts
      .map(p => (p.includes(' ') ? `"${p}"` : p))
      .join(' ');

    console.log(`  ${displayCmd}`);

    if (args['dry-run']) continue;

    try {
      // Clean and recreate output directory
      if (existsSync(outputDir)) rmSync(outputDir, { recursive: true, force: true });
      mkdirSync(outputDir, { recursive: true });

      // Write temp config
      writeFileSync(tmpConfigPath, JSON.stringify(config, null, 2));

      execSync(displayCmd, { cwd: __dirname, stdio: 'inherit' });

      console.log(`\x1b[32m  ✓ ${spec.name} / ${targetType}\x1b[0m`);
      succeeded++;
    } catch (err) {
      console.error(`\x1b[31m  ✗ Failed: ${err.message}\x1b[0m`);
      failed++;
      process.exitCode = 1;
    } finally {
      if (existsSync(tmpConfigPath)) rmSync(tmpConfigPath, { force: true });
    }
  }
}

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------
if (!args['dry-run']) {
  const total = succeeded + failed + skipped;
  const parts = [];
  if (succeeded > 0) parts.push(`\x1b[32m${succeeded} succeeded\x1b[0m`);
  if (failed    > 0) parts.push(`\x1b[31m${failed} failed\x1b[0m`);
  if (skipped   > 0) parts.push(`\x1b[33m${skipped} skipped\x1b[0m`);
  console.log(`\n${total} target(s): ${parts.join(', ')}`);
}
