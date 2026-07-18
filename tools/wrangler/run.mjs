#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);
const upstream = join(dirname(require.resolve('wrangler-upstream/package.json')), 'bin/wrangler.js');
const args = process.argv.slice(2);

function run(commandArgs) {
	const result = spawnSync(process.execPath, [upstream, ...commandArgs], {
		stdio: 'inherit',
		env: process.env,
	});

	process.exit(result.status ?? 1);
}

// Cloudflare Pages projects must use `wrangler pages deploy`, not `wrangler deploy`.
if (args[0] === 'deploy') {
	run(['pages', 'deploy', 'dist', '--project-name=isle', '--commit-dirty=true']);
}

run(args);
