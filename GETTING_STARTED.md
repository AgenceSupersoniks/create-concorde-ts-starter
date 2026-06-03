# Bienvenue dans votre projet Concorde

```bash
npx @supersoniks/create-concorde-ts-starter <nom-du-projet>
cd <nom-du-projet> && yarn dev
```

## Structure

```
src/
├── main.ts                 # theme + router (minimal)
├── app/                    # votre app après retrait du kit (modèle)
├── utils/dataprovider.ts   # get / set / read (DataProvider)
└── starter/                # ← SUPPRIMER quand vous êtes prêt
    ├── README.md
    ├── routes/             # /, /concepts/*, /demo/*, /advanced/*
    ├── concepts/           # pages pédagogiques + dp.ts
    ├── demo/               # mock API, list/queue templates
    ├── advanced/           # DataProviderKey dynamique
    └── components/         # sidebar, docs-shell
```

## Kit pédagogique (`src/starter/`)

Tout est dans **un seul dossier** : landing, concepts, utilisations classiques, utilisations avancées, mock API.

### Menu

| Section | Contenu |
|---------|---------|
| **Concepts** | DataProvider, DataProviderKey, Endpoint, @publish, @handle, form, sub |
| **Utilisations classiques** | @get, sonic-list (templates Lit), sonic-queue (scroll + recherche) |
| **Utilisations avancées** | DataProviderKey avec placeholder dynamique |

Landing (`/`) : liens vers **Concepts** et **Utilisations classiques**.

## Passer à votre app seule

1. Supprimer **`src/starter/`**
2. **`vite.config.mts`** : `autoRoutesPlugin("src/app")` à la place de `src/starter/routes`
3. **`src/starter-router-host.ts`** : `import { router } from "./app/router"`
4. Utiliser le modèle dans **`src/app/page.ts`** + `yarn dev` pour regénérer `router.ts`

Aucune autre dépendance au kit.

## DataProvider

```ts
import { get, set } from "src/utils/dataprovider";
set("monChemin", { value: "" });
```

Voir `.cursor/skills/concorde/SKILL.md` et `AGENTS.md`. Sync : `yarn ai:sync`.
