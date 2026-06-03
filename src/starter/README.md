# Concorde starter kit (optional)

This folder contains **all** learning content: routes, concepts, mock API demos, advanced patterns, and the sidebar menu.

## Contents

```
starter/
├── routes/
│   ├── page.ts                 # landing /
│   ├── concepts/*              # tutorial pages (incl. scope)
│   ├── ui/                     # UI kit overview (/ui)
│   ├── demo/*                  # @get, sonic-list, sonic-queue
│   └── advanced/dynamic/       # dynamic DataProviderKey placeholder
├── concepts/                   # dp.ts, init, demo components
├── demo/                       # mock API, demo-*-templates
├── advanced/                   # dp.ts, init, dpkey-dynamic-demo
├── ui/                         # ui-kit-demo.ts
├── components/                 # sidebar.ts, docs-shell.ts
└── init.ts                     # init concepts + demo + advanced
```

## Menu (sidebar)

| Section | Routes |
|---------|--------|
| Data concepts | `/concepts/dataprovider`, `/concepts/scope`, … `/concepts/sub` |
| UI kit | `/ui` |
| Functional patterns | `/demo/get`, `/demo/list`, `/demo/queue` |
| Advanced patterns | `/advanced/dynamic` |

## Kit conventions

- **Scope** — app-wide defaults (API, forms): `/concepts/scope`; `scopeCallout()` on related pages
- **Dev** — `↗ source` links when Cursor CLI is detected (`cursor --version` at `yarn dev` start)
- **DataProvider** + `get` / `set` (`src/utils/dataprovider.ts`)
- `sonic-list` / `sonic-queue` templates: Lit properties (`.items`, `.separator`, `.noItems`, `.skeleton`) — no HTML `<template>`
- No `sonic-fetch` — use `sonic-queue` or `@get`

Agent docs: `yarn ai:sync` then `.cursor/skills/` and `AGENTS.md`.

## Remove for production

1. Delete **`src/starter/`** entirely
2. In **`vite.config.mts`**: replace `autoRoutesPlugin("src/starter/routes")` with `autoRoutesPlugin("src/app")`
3. In **`src/starter-router-host.ts`**: import `./app/router` instead of `./starter/routes/router`
4. Create a minimal home page in **`src/app/`** (see `GETTING_STARTED.md`)

The rest of the project (`src/app/`, `src/utils/`) remains your application.
