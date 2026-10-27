# Bienvenue dans votre projet Concorde

```bash
npx @supersoniks/create-concorde-ts-starter <nom-du-projet>
cd <nom-du-projet> && yarn dev
```

## Structure

```
src/
├── main.ts                 # thème + <app-root>
├── app-root.ts             # rend le routeur généré
├── app/                    # routes (un dossier = une route)
│   ├── layout.ts           # header : marque, navigation, clair / sombre
│   ├── page.ts             # /
│   ├── 404.ts              # toute URL inconnue
│   ├── demo/page.ts        # /demo
│   └── router.ts           # généré, ne pas modifier
├── components/             # composants (hors de app/ : pas des routes)
│   ├── flight-board.ts     # démo : recherche + switch → store → liste
│   └── theme-toggle.ts
└── css/app.css             # tokens du thème (clair et sombre)
```

## Router

`autoRoutesPlugin("src/app")` (`vite.config.mts`) génère `src/app/router.ts` à chaque ajout ou suppression de fichier pendant `yarn dev`.

- `src/app/vols/page.ts` → `/vols`
- `src/app/vols/[code]/page.ts` → `/vols/:code`
- un `layout.ts` dans un dossier enveloppe ses pages
- pas de tirets dans les noms de dossiers
- liens : `pushstate href="/vols"` sur `sonic-button` ou `sonic-menu-item`

## DataProvider

Toujours via une clé typée :

```ts
import { DataProviderKey } from "@supersoniks/concorde/decorators";
import { get, set, dp } from "@supersoniks/concorde/utils";

const profileKey = new DataProviderKey<{ name: string }>("profile");
set(profileKey, { name: "" });   // écrit
get(profileKey.name);            // lit (snapshot)
dp(profileKey.name).set("Ada");  // instance DataProvider
```

Dans un template : `sub(profileKey.name)` (`@supersoniks/concorde/directives`).

## Agents IA

Skill `concorde` dans `.agents/skills/` (liées depuis `.claude/skills/` et `.junie/skills/`). Voir `AGENTS.md`. Mise à jour : `yarn ai:sync`.
