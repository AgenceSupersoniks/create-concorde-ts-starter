# create-concorde-ts-starter

Package **`npx`** qui génère un nouveau projet Concorde (clone du template, sans `bin/`, `package.json.name` = votre nom).

Ce dépôt sert à **maintenir le template** ; après `npx`, l’utilisateur travaille dans **son** dossier (voir `GETTING_STARTED.md` livré dans le projet généré).

## Utilisation (côté développeur final)

```bash
npx @supersoniks/create-concorde-ts-starter mon-projet
cd mon-projet && yarn dev
```

Page d’accueil et kit pédagogique dans **`src/starter/`** (un seul dossier supprimable). Votre app : **`src/app/`**.

## Développer le template lui-même

```bash
git clone …/create-concorde-ts-starter && cd create-concorde-ts-starter
yarn install && yarn dev
```

Même UI que le projet généré (sans passer par `npx`).

## API mock (`/mock-api`)

| Route | Usage |
|-------|--------|
| `GET /mock-api/users?offset=0&limit=4&q=…` | Scroll infini — `sonic-queue` + recherche |
| `GET /mock-api/users/2` | Utilisateur seul (fixtures) |
| `GET /mock-api/communes?limit=5` | Tableau — démo `@get` + `APIConfiguration` |
| `GET /mock-api/health` | Santé du mock |

**Implémentation**

- `src/demo-api/router.ts` — logique partagée (fixtures, routes)
- `src/demo-api/service-worker.ts` — intercepte les `fetch` vers `/mock-api/*` (build → `public/demo-api-sw.js`)
- `scripts/demo-api-vite-plugin.ts` — rebuild du SW + middleware de secours en dev/preview
- `src/starter/demo/api/` — DataProvider `starterApiConfiguration` (`DataProviderKey<APIConfiguration>`)

Étendre les routes dans `src/starter/demo/api/` (ou `scripts/demo-api-vite-plugin.ts`) pour de nouvelles démos.

## Fichiers clés

| Fichier | Rôle |
|---------|------|
| `src/starter/` | Kit complet : landing, concepts, démos, advanced — **supprimer pour prod** |
| `src/app/` | Modèle minimal pour votre app après retrait du kit |
| `AGENTS.md` | Guide agents (sync via `yarn ai:sync`) |
| `ai/starter/` | Source overlay starter (skills/rules) |

## Agent IA (Cursor + JetBrains)

Fichiers dans `ai/` (Concorde) + overlay `ai/starter/` (ce template).

```bash
yarn ai:sync   # .cursor/, .aiassistant/rules/, AGENTS.md
```

Dans un projet Concorde sans starter :

```bash
node node_modules/@supersoniks/concorde/scripts/ai-init.mjs
```

## Concorde

Documentation : fichiers `.md` dans `node_modules/@supersoniks/concorde/src/`.
