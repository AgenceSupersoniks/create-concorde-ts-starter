# create-concorde-ts-starter

Package **`npx`** qui génère un nouveau projet Concorde (clone du template, sans `bin/`, `package.json.name` = votre nom).

Ce dépôt sert à **maintenir le template** ; après `npx`, l’utilisateur travaille dans **son** dossier (voir `GETTING_STARTED.md` livré dans le projet généré).

## Utilisation (côté développeur final)

```bash
npx @supersoniks/create-concorde-ts-starter mon-projet
cd mon-projet && yarn dev
```

Trois pages dans `src/app/` : accueil (`/`), démo (`/demo`) et 404, plus un header avec navigation et bouton clair / sombre. Voir `GETTING_STARTED.md`.

## Développer le template lui-même

```bash
git clone …/create-concorde-ts-starter && cd create-concorde-ts-starter
yarn install && yarn ai:sync && yarn dev
```

`STARTER_HTTP=1 yarn dev` sert en HTTP simple (navigateurs qui refusent le certificat auto-signé).

## Agents IA (Cursor, Claude Code, Junie…)

Skill `concorde` au format [Agent Skills](https://agentskills.io), fournie par le package.

```bash
yarn ai:sync   # copie dans .agents/skills/, liens depuis .claude/skills/ et .junie/skills/
```

Ces dossiers ne sont pas versionnés : le CLI de création lance `yarn ai:sync`, à relancer après un `git clone` ou une mise à jour de Concorde.

Dans un projet Concorde sans starter :

```bash
node node_modules/@supersoniks/concorde/scripts/ai-init.mjs
```

## Concorde

Documentation : https://concorde.supersoniks.org/ (index agents : `/llms.txt`) · hors ligne : fichiers `.md` dans `node_modules/@supersoniks/concorde/src/`.
