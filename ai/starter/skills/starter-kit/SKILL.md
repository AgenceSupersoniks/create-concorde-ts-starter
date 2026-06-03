---
name: starter-kit
description: >-
  Kit pédagogique create-concorde-ts-starter : src/starter/, menu 3 sections,
  mock API, routes concepts/demo/advanced. Supprimable en prod.
---

# Kit pédagogique — create-concorde-ts-starter

Landing + kit dans **`src/starter/`** (supprimable). App future : **`src/app/`**.

Accès DataProvider : **`src/utils/dataprovider.ts`** (`get`, `set`, `read`).

## Structure

```
src/starter/
├── routes/           # /, /concepts/*, /demo/*, /advanced/*
├── concepts/         # dp.ts, composants démo
├── demo/             # mock API, demo-*-templates
├── advanced/         # DataProviderKey dynamique
├── components/       # sidebar.ts, docs-shell.ts
└── init.ts
```

## Menu (sidebar)

| Section | Routes |
|---------|--------|
| **Concepts** | `/concepts/dataprovider` … `/concepts/sub` |
| **Utilisations classiques** | `/demo/get`, `/demo/list`, `/demo/queue` |
| **Utilisations avancées** | `/advanced/dynamic` |

Source : `src/starter/components/sidebar.ts` — `CONCEPTS_SECTION`, `DEMO_SECTION`, `ADVANCED_SECTION`.

## Progression pédagogique

1. DataProvider → DataProviderKey → Endpoint
2. @publish, @handle, formDataProvider, sub()
3. @get, sonic-list (templates Lit), sonic-queue (scroll + recherche)
4. DataProviderKey dynamique (`/advanced/dynamic`)

## Fichiers clés

| Sujet | Fichier |
|-------|---------|
| Clés concepts | `src/starter/concepts/dp.ts` |
| Clé dynamique | `src/starter/advanced/dp.ts` |
| Templates list | `src/starter/demo/components/demo-list-templates.ts` |
| Templates queue | `src/starter/demo/components/demo-queue-templates.ts` |
| Mock API | `src/starter/demo/api/` |

## Supprimer le kit

Voir `src/starter/README.md` et `GETTING_STARTED.md`.
