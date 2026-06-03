# Kit pédagogique Concorde (optionnel)

Ce dossier contient **tout** le contenu d’apprentissage : routes, concepts, démos mock API, patterns avancés, menu latéral.

## Contenu

```
starter/
├── routes/
│   ├── page.ts                 # landing /
│   ├── concepts/*              # 7 pages pédagogiques
│   ├── demo/*                  # @get, sonic-list, sonic-queue
│   └── advanced/dynamic/       # DataProviderKey placeholder dynamique
├── concepts/                   # dp.ts, init, composants démo
├── demo/                       # mock API, demo-*-templates
├── advanced/                   # dp.ts, init, dpkey-dynamic-demo
├── components/                 # sidebar.ts, docs-shell.ts
└── init.ts                     # init concepts + demo + advanced
```

## Menu (sidebar)

| Section | Routes |
|---------|--------|
| Concepts | `/concepts/dataprovider` … `/concepts/sub` |
| Utilisations classiques | `/demo/get`, `/demo/list`, `/demo/queue` |
| Utilisations avancées | `/advanced/dynamic` |

## Conventions du kit

- **DataProvider** + `get` / `set` (`src/utils/dataprovider.ts`)
- Templates `sonic-list` / `sonic-queue` : propriétés Lit (`.items`, `.separator`, `.noItems`, `.skeleton`) — pas de `<template>` HTML
- Pas de `sonic-fetch` — `sonic-queue` ou `@get`

Documentation agents : `yarn ai:sync` puis `.cursor/skills/` et `AGENTS.md`.

## Supprimer pour passer en prod

1. Supprimer **`src/starter/`** en entier
2. Dans **`vite.config.mts`** : remplacer `autoRoutesPlugin("src/starter/routes")` par `autoRoutesPlugin("src/app")`
3. Dans **`src/starter-router-host.ts`** : importer `./app/router` au lieu de `./starter/routes/router`
4. Créer une page d’accueil minimale dans **`src/app/`** (voir `GETTING_STARTED.md`)

Le reste du projet (`src/app/`, `src/utils/`) reste votre application.
