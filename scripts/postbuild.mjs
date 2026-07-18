import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);

if (args.includes('--deploy-only')) {
	runDeploy();
	process.exit(0);
}

// Local builds only compile the site.
if (!process.env.WORKERS_CI) {
	process.exit(0);
}

runDeploy();

function runDeploy() {
	const result = spawnSync(
		'wrangler',
		['pages', 'deploy', 'dist', '--project-name=isle', '--commit-dirty=true'],
		{ stdio: 'inherit', shell: true },
	);

	if (result.status !== 0) {
		process.exit(result.status ?? 1);
	}
}
