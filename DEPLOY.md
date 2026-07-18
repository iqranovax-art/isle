# Cloudflare deployment

This site deploys with **Workers Builds** using:

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy` (default)

`wrangler.toml` configures a Worker (`public/_worker.js`) plus static assets (`dist/`).
The postbuild step writes `dist/.assetsignore` so `_worker.js` is not uploaded as a public file.

## Manual deploy

```sh
npm run build
npm run deploy
```
