#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

// A custom CLOUDFLARE_API_TOKEN in Workers Builds often lacks Pages deploy scope.
// Unset it so Cloudflare can use the linked Git integration credentials instead.
delete process.env.CLOUDFLARE_API_TOKEN;

const require = createRequire(import.meta.url);
const wranglerBin = join(dirname(require.resolve('wrangler/package.json')), 'bin/wrangler.js');

const result = spawnSync(
	process.execPath,
	[wranglerBin, 'pages', 'deploy', './dist', '--project-name=isle', '--commit-dirty=true'],
	{
		stdio: 'inherit',
		env: process.env,
	},
);

process.exit(result.status ?? 1);
