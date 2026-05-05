#!/usr/bin/env node
/**
 * fetch-remote-api.mjs — fetches OpenAPI specs from running dev servers
 *
 * Hits the /v3/api-specs-docs endpoint on each I2E service running on the
 * local dev Tomcat, saves the JSON response as YAML to api-specs/<name>.yaml.
 *
 * Usage:
 *   node fetch-remote-api.mjs [--spec <name>] [--dry-run]
 *   npm run fetch-remote -- [options]
 *
 * Environment:
 *   DEV_HOST    Dev server hostname (default: ncias-p3301-v)
 *   SM_USER     SiteMinder username sent as request header (default: current OS user)
 */

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { parseArgs } from 'util';
import { userInfo } from 'os';
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
Usage: node fetch-remote-api.mjs [options]
       npm run fetch-remote -- [options]

Fetches the live OpenAPI spec from each I2E service running on the dev server
and writes it as YAML to api-specs/. Requires VPN / dev network access.

Options:
  -s, --spec <name>   Fetch only this spec (default: all)
  -d, --dry-run       Print URLs without fetching
  -h, --help          Show this help

Environment:
  DEV_HOST   Dev server hostname (default: ncias-p3301-v)
  SM_USER    SiteMinder user header value (default: current OS username, uppercased)
`);
  process.exit(0);
}

const DEV_HOST = process.env.DEV_HOST ?? 'ncias-p3301-v';
const SM_USER  = process.env.SM_USER  ?? userInfo().username.toUpperCase();

// Service endpoint map: spec name → { port, context }
const ENDPOINTS = {
  sm_i2e_ara_ws:      { port: 16080, context: 'i2earaws'    },
  sm_i2e_common_ws:   { port: 14080, context: 'i2ecommonws' },
  sm_i2e_em_ws:       { port: 8080,  context: 'i2eemws'     },
  sm_i2e_fs_ws:       { port: 9080,  context: 'i2efsws'     },
  sm_i2e_gpmats_ws:   { port: 29080, context: 'i2egpmatsws' },
  sm_i2e_icd_ws:      { port: 11080, context: 'i2eicdws'    },
  sm_i2e_jasper_ws:   { port: 15080, context: 'i2ejasperws' },
  sm_i2e_mail_service:{ port: 28080, context: 'i2emailsvc'  },
  sm_i2e_referral_ws: { port: 13080, context: 'i2erefws'    },
  sm_i2e_yg_ws:       { port: 10080, context: 'i2eygws'     },
};

const targets = args.spec
  ? (ENDPOINTS[args.spec] ? { [args.spec]: ENDPOINTS[args.spec] } : null)
  : ENDPOINTS;

if (!targets) {
  console.error(`\x1b[31mError: "${args.spec}" is not a remote-fetchable spec. Valid names:\n  ${Object.keys(ENDPOINTS).join('\n  ')}\x1b[0m`);
  process.exit(1);
}

let succeeded = 0;
let failed = 0;

for (const [name, { port, context }] of Object.entries(targets)) {
  const url      = `http://${DEV_HOST}:${port}/${context}/v3/api-specs-docs`;
  const destPath = resolve(__dirname, 'api-specs', `${name}.yaml`);

  console.log(`\n\x1b[36m▶ ${name}\x1b[0m`);
  console.log(`  url:  ${url}`);
  console.log(`  dest: ${destPath}`);

  if (args['dry-run']) continue;

  try {
    const res = await fetch(url, {
      headers: {
        'Accept':  'application/json',
        'SM_USER': SM_USER,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}`);
    }

    const obj = await res.json();
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
  const total = Object.keys(targets).length;
  const parts = [];
  if (succeeded > 0) parts.push(`\x1b[32m${succeeded} succeeded\x1b[0m`);
  if (failed    > 0) parts.push(`\x1b[31m${failed} failed\x1b[0m`);
  console.log(`\n${total} spec(s): ${parts.join(', ')}`);
}
