#!/usr/bin/env node
import { spawnSync } from 'node:child_process';

const result = spawnSync(
	'wrangler',
	['pages', 'deploy', 'dist', '--project-name=isle', '--commit-dirty=true'],
	{ stdio: 'inherit', shell: true },
);

process.exit(result.status ?? 1);
