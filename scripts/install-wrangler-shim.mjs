#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const shim = path.join(root, 'scripts/wrangler-shim.cjs');
const wranglerPkg = path.join(root, 'node_modules/wrangler/package.json');

if (!fs.existsSync(shim) || !fs.existsSync(wranglerPkg)) {
	process.exit(0);
}

for (const binName of ['wrangler', 'wrangler2', 'cf-wrangler']) {
	const binPath = path.join(root, 'node_modules/.bin', binName);

	try {
		fs.unlinkSync(binPath);
	} catch {
		// Bin may not exist on all platforms.
	}

	fs.copyFileSync(shim, binPath);
	fs.chmodSync(binPath, 0o755);
}
