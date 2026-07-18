import { chmodSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const shimPath = resolve('tools/wrangler/run.mjs');
const binDir = join(process.cwd(), 'node_modules', '.bin');
const binPath = join(binDir, 'wrangler');

const shimLauncher = `#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
const result = spawnSync(process.execPath, [${JSON.stringify(shimPath)}, ...process.argv.slice(2)], {
	stdio: 'inherit',
	env: process.env,
});
process.exit(result.status ?? 1);
`;

if (!existsSync(binDir)) {
	mkdirSync(binDir, { recursive: true });
}

writeFileSync(binPath, shimLauncher, { mode: 0o755 });
chmodSync(binPath, 0o755);
