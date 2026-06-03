# Agents — create-concorde-ts-starter

Couche **starter** (template npm). Voir aussi la base Concorde dans le même `AGENTS.md`.

## Skills starter

| Skill | Quand |
|-------|--------|
| `.cursor/skills/starter-kit/SKILL.md` | Kit `src/starter/`, menu, mock API |

## Architecture

- **`src/starter/`** — kit pédagogique supprimable
- **`src/app/`** — modèle minimal post-suppression
- **`src/starter/routes/router.ts`** — généré (pas de tirets dans les dossiers routes)

## Sync des fichiers agent

```bash
yarn ai:sync
```

Source Concorde : `node_modules/@supersoniks/concorde/ai/`  
Overlay starter : `ai/starter/` (ce dépôt).
