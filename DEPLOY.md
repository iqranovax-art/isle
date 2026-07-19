# Cloudflare deployment

This site deploys to **Cloudflare Pages** (project: `isle`).

## Workers Builds settings

| Setting | Value |
| ------- | ----- |
| **Production branch** | `main` |
| **Build command** | `npm run build` |
| **Deploy command** | `npm run deploy` |

Direct equivalent:

```text
npx wrangler pages deploy ./dist --project-name=isle --commit-dirty=true
```

**Do not use** `npx wrangler deploy` — that targets Workers and will fail.

## Fix: Authentication error 10000

If deploy fails with:

```text
Authentication error [code: 10000]
A request to the Cloudflare API (.../pages/projects/isle) failed.
```

the build is fine — the API token used in CI lacks **Pages deploy** permission.

### Option A (recommended): remove the custom API token

1. Open **Workers & Pages → isle → Settings → Builds → Environment variables**
2. **Delete** `CLOUDFLARE_API_TOKEN` if you added one manually
3. Let Workers Builds use the built-in Cloudflare integration token
4. **Clear build cache** and redeploy

### Option B: create a token with the right permissions

Create a new API token at https://dash.cloudflare.com/profile/api-tokens with:

| Permission | Access |
| ---------- | ------ |
| **Account → Cloudflare Pages** | Edit |
| **Account → Account Settings** | Read |
| **User → User Details** | Read |

Add it as `CLOUDFLARE_API_TOKEN` in the project's build environment variables.

Also set:

```text
CLOUDFLARE_ACCOUNT_ID=ae8f90acc9391aad888d07ad397ed7b2
```

### Option C: use Pages Git deploy (no separate deploy step)

If this is a **Pages** project (not Workers CI):

1. **Build command:** `npm run build`
2. **Build output directory:** `dist`
3. **Remove** the custom deploy command entirely

Pages will publish `dist/` automatically after a successful build.

## Stale build cache

If logs show `islecheats@0.0.1` instead of the current version, Cloudflare is using a cached/old build:

1. Confirm **Production branch** is `main`
2. **Settings → Builds → Clear build cache**
3. Trigger a new deployment

## Manual deploy

```sh
npm install
npm run build
npm run deploy
```

## Redirects

HTTP/www → HTTPS apex redirects are handled by `public/_worker.js`
(Pages advanced mode) and `public/_redirects`.
