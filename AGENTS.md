## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Cursor Cloud specific instructions

- Static Astro marketing site (The Isle Cheats). No backend, database, or environment variables are required to run it.
- Dependencies install with `npm install` (npm; `package-lock.json` is authoritative).
- Dev server: `npm run dev` serves on `http://localhost:3000` (`--host` is enabled). Build with `npm run build` (outputs static `./dist/`); preview the build with `npm run preview`.
- There are no lint or automated test scripts in this repo; `npm run build` is the main verification step.
