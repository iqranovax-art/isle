#!/usr/bin/env node
'use strict';

// Cloudflare Workers Builds may inject CLOUDFLARE_API_TOKEN without Pages deploy scope.
// Unset it so Wrangler can use the Git-linked integration credentials instead.
delete process.env.CLOUDFLARE_API_TOKEN;

const { spawnSync } = require('node:child_process');
const path = require('node:path');

const wranglerBin = path.join(__dirname, '..', 'node_modules', 'wrangler', 'bin', 'wrangler.js');
const result = spawnSync(process.execPath, [wranglerBin, ...process.argv.slice(2)], {
	stdio: 'inherit',
	env: process.env,
});

process.exit(result.status ?? 1);
