# Cloudflare deployment

This site deploys to **Cloudflare Pages** (project: `isle`).

## Workers Builds settings

| Setting | Value |
| ------- | ----- |
| **Build command** | `npm run build` |
| **Deploy command** | `npm run deploy` |

Cloudflare Pages cannot use `npx wrangler deploy` (that command is for Workers).
Use `npm run deploy`, which runs `wrangler pages deploy dist --project-name=isle`.

The repo also ships a local `wrangler` shim (`tools/wrangler`) so
`npx wrangler deploy` redirects to the Pages deploy command after `npm install`.

## If deploy still fails

Set the deploy command in the Cloudflare dashboard to exactly:

```text
npm run deploy
```

Equivalent direct command:

```text
npx wrangler pages deploy dist --project-name=isle --commit-dirty=true
```

## Manual deploy

```sh
npm install
npm run build
npm run deploy
```

## Redirects

HTTP/www → HTTPS apex redirects are handled by `public/_worker.js`
(Pages advanced mode).
