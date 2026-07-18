import { writeFileSync } from 'node:fs';

// dist/_worker.js is copied from public/ for Pages compatibility, but must not
// be published as a static asset when using wrangler deploy with [assets].
writeFileSync('dist/.assetsignore', '_worker.js\n');
