# Cloudflare Pages deployment

This site uses **Cloudflare Pages Git integration**. Pages publishes `dist/` automatically after a successful build — no separate deploy step.

## Dashboard settings

| Setting | Value |
| ------- | ----- |
| **Production branch** | `main` |
| **Root directory** | `/` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Deploy command** | *(leave empty)* |

## Do not use

- `npx wrangler pages deploy ./dist --project-name=isle --commit-dirty=true` — not needed for Pages Git deploy and can fail with auth errors
- `CLOUDFLARE_API_TOKEN` as a build environment variable — not required for normal Pages Git integration
- `npx wrangler deploy` — targets Workers, not Pages

## wrangler.toml

```toml
name = "isle"
compatibility_date = "2024-09-23"
pages_build_output_dir = "./dist"
```

Do **not** add `account_id` — Cloudflare Pages does not accept it in this file.

## If deploy fails

1. Confirm **Deploy command** is empty
2. Remove any manual `CLOUDFLARE_API_TOKEN` from **Settings → Environment variables**
3. **Clear build cache** and redeploy
4. Confirm **Build output directory** is `dist` (not `./dist/` with a trailing slash issue — either works, but use `dist`)

## Manual local build

```sh
npm install
npm run build
```

Output is in `./dist/`.
