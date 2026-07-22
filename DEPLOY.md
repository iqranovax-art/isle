# Cloudflare Workers deployment

This site deploys as a **Cloudflare Worker** named `isle` with static assets from `./dist`.

## Workers Builds settings

| Setting | Value |
| ------- | ----- |
| **Production branch** | `main` |
| **Root directory** | `/` |
| **Build command** | `npm run build` |
| **Deploy command** | `npx wrangler deploy` |

Do **not** use `npx wrangler pages deploy` — that targets the Pages API and needs separate Pages token scopes.

## wrangler.toml

```toml
name = "isle"
compatibility_date = "2026-07-22"

[assets]
directory = "./dist"
```

Do **not** use `pages_build_output_dir` — that is Pages-only.

Do **not** add `account_id` unless Cloudflare support instructs you to for a specific Workers setup.

## Do not use

- `npx wrangler pages deploy ./dist --project-name=isle` — Pages deploy, not Workers
- A manual `CLOUDFLARE_API_TOKEN` env var with only Pages scopes — Workers Builds provides a Worker deploy token by default

## Custom domain

Attach `islecheats.net` and `www.islecheats.net` to the **Worker** `isle`:

**Workers & Pages → isle → Settings → Domains & Routes**

## Manual deploy

```sh
npm install
npm run build
npm run deploy
```
