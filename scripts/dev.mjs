#!/usr/bin/env node
import { spawn } from 'node:child_process';
import net from 'node:net';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const HOST = '0.0.0.0';
const DEFAULT_PORT = Number(process.env.PORT) || 3000;
const MAX_PORT = DEFAULT_PORT + 20;

function isPortAvailable(port) {
	return new Promise((resolve) => {
		const server = net.createServer();

		server.once('error', () => resolve(false));
		server.once('listening', () => {
			server.close(() => resolve(true));
		});

		server.listen(port, HOST);
	});
}

async function findAvailablePort(startPort) {
	for (let port = startPort; port <= MAX_PORT; port += 1) {
		if (await isPortAvailable(port)) {
			return port;
		}
	}

	throw new Error(`No free port found between ${startPort} and ${MAX_PORT}.`);
}

const port = await findAvailablePort(DEFAULT_PORT);
const astroBin = path.join(path.dirname(require.resolve('astro/package.json')), 'bin/astro.mjs');

if (port !== DEFAULT_PORT) {
	console.warn(`[dev] Port ${DEFAULT_PORT} is in use. Using ${port} instead.`);
}

console.log(`[dev] Starting Astro on ${HOST}:${port}`);
console.log(`[dev] Local:   http://localhost:${port}/`);
console.log(`[dev] Network: http://127.0.0.1:${port}/`);

const child = spawn(
	process.execPath,
	[astroBin, 'dev', '--host', HOST, '--port', String(port)],
	{
		stdio: 'inherit',
		env: {
			...process.env,
			HOST,
			PORT: String(port),
		},
	},
);

for (const signal of ['SIGINT', 'SIGTERM']) {
	process.on(signal, () => {
		child.kill(signal);
	});
}

child.on('exit', (code, signal) => {
	if (signal) {
		process.kill(process.pid, signal);
		return;
	}

	process.exit(code ?? 1);
});
