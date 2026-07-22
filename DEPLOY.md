# Cloudflare Workers deployment

This site is a **static Astro build** deployed as Cloudflare Worker static assets.

## Workers Builds settings

| Setting | Value |
| ------- | ----- |
| **Production branch** | `main` |
| **Root directory** | `/` |
| **Build command** | `npm run build` |
| **Deploy command** | `npx wrangler deploy` |
| **Non-production deploy command** | `npx wrangler versions upload` |

For preview branches, `npx wrangler deploy` also works if Cloudflare accepts the same command for non-production builds.

## wrangler.toml

```toml
name = "hamzaisle"
compatibility_date = "2026-07-22"

[assets]
directory = "./dist"
```

Do **not** use:

- `pages_build_output_dir` (Pages-only)
- `main = "./dist/_worker.js"` (not needed for a static site)
- `npx wrangler pages deploy`

## Static build

Astro is configured with `output: 'static'`. There is no Cloudflare adapter and no `dist/_worker.js` — only HTML, CSS, JS, and images in `dist/`.

HTTP/www redirects can use **Bulk Redirects** in the Cloudflare dashboard (`cloudflare/bulk-redirects.csv`).

## Manual deploy

```sh
npm install
npm run build
npm run deploy
```
