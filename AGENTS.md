# Agents — Concorde + starter

Guide pour les agents IA sur le template **create-concorde-ts-starter**.

## Skills / rules

| Fichier | Rôle |
|---------|------|
| `.cursor/skills/concorde/SKILL.md` | Patterns framework Concorde |
| `.cursor/skills/concorde-imports/SKILL.md` | Imports courts (menu, list, utils…) |
| `.cursor/skills/concorde-menu/SKILL.md` | Navigation sonic-menu |
| `.cursor/skills/starter-kit/SKILL.md` | Learning kit `src/starter/` |
| `.cursor/skills/concorde-ui/SKILL.md` | UI components by use case |
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

Fichiers `.md` dans le package installé : `node_modules/@supersoniks/concorde/src/` (composants UI, décorateurs, getting-started).

---

<!-- concorde-ai -->

# Agents — Concorde

Guide pour les agents IA sur un projet **Concorde** (Lit + DataProvider).

## Skills / rules (après installation)

| Fichier | Rôle |
|---------|------|
| `.cursor/skills/concorde/SKILL.md` | Patterns framework |
| `.cursor/skills/concorde-menu/SKILL.md` | Navigation sonic-menu |
| `.cursor/rules/concorde.mdc` | Règles Cursor (patterns) |
| `.aiassistant/rules/concorde.md` | Règles JetBrains AI Assistant |

Installation : `node node_modules/@supersoniks/concorde/scripts/ai-init.mjs`  
Source : `@supersoniks/concorde/ai/`

## Conventions impératives

- Toujours **DataProvider**, accès via **`get` / `set`**
- Pas de **`sonic-fetch`**, pas de **`PublisherManager`**
- Pas de `@onAssign` — **`@handle`** + `DataProviderKey`
- Formulaires : **`formDataProvider`** + `name` sur `sonic-input`
- Listes : templates **Lit** (`.items`, `.separator`, `.noItems`, `.skeleton`) — pas de promotion des `<template>` HTML

## Documentation

Fichiers `.md` dans le package : `node_modules/@supersoniks/concorde/src/` (composants, décorateurs, getting-started).

---

# Agents — create-concorde-ts-starter

Starter layer (npm template). See base Concorde guidance in root `AGENTS.md`.

## Starter skills

| Skill | When |
|-------|------|
| `.cursor/skills/starter-kit/SKILL.md` | Kit `src/starter/`, menu, mock API |
| `.cursor/skills/concorde-ui/SKILL.md` | Pick UI components by use case |
| `.cursor/skills/concorde-scope/SKILL.md` | Inherited API / form / icon defaults (scope) |

## Architecture

- **`src/starter/`** — removable learning kit
- **`src/app/`** — minimal app after kit removal
- **`src/starter/routes/router.ts`** — generated (no hyphens in route folder names)

## Sync agent files

```bash
yarn ai:sync
```

Concorde source: `node_modules/@supersoniks/concorde/ai/`  
Starter overlay: `ai/starter/` (this repo).
