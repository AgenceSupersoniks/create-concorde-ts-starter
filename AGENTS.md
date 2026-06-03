# Agents — Concorde + starter

Guide pour les agents IA sur le template **create-concorde-ts-starter**.

## Skills / rules

| Fichier | Rôle |
|---------|------|
| `.cursor/skills/concorde/SKILL.md` | Patterns framework Concorde |
| `.cursor/skills/concorde-imports/SKILL.md` | Imports courts (menu, list, utils…) |
| `.cursor/skills/concorde-menu/SKILL.md` | Navigation sonic-menu |
| `.cursor/skills/starter-kit/SKILL.md` | Kit pédagogique `src/starter/` |
| `.cursor/rules/*.mdc` | Règles Cursor |
| `.aiassistant/rules/concorde.md` | Règles JetBrains AI Assistant |

Regénérer après modification : `yarn ai:sync`  
Sources : `node_modules/@supersoniks/concorde/ai/` + overlay `ai/starter/`.

## Conventions impératives

- Toujours **DataProvider**, accès via **`get` / `set`**
- Pas de **`sonic-fetch`**, pas de **`PublisherManager`**
- Pas de `@onAssign` — **`@handle`** + `DataProviderKey`
- Formulaires : **`formDataProvider`** + `name` sur `sonic-input`
- Listes : templates **Lit** (`.items`, `.separator`, `.noItems`, `.skeleton`)
- **Imports** : chemins courts (`@supersoniks/concorde/menu`, `/list`, `/utils/endpoint`) — skill `concorde-imports`

## Architecture starter

- **`src/starter/`** — kit pédagogique supprimable
- **`src/app/`** — modèle minimal post-suppression
- **`src/starter/routes/router.ts`** — généré (pas de tirets dans les dossiers routes)

## Documentation Concorde

https://doc.concorde.test/
