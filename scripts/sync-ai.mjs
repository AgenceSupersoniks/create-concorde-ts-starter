#!/usr/bin/env node
/**
 * Synchronise la skill agent IA `concorde`, copiée dans `.agents/skills/` et
 * liée depuis `.claude/skills/` et `.junie/skills/`. AGENTS.md reste maintenu
 * à la main.
 *
 * Usage: yarn ai:sync
 * Dev local Concorde: CONCORDE_AI=/chemin/vers/concorde/ai yarn ai:sync
 */

import {spawnSync} from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

function resolveConcordeAi() {
  if (process.env.CONCORDE_AI) {
    return path.resolve(process.env.CONCORDE_AI);
  }
  const local = path.resolve(projectRoot, "../concorde/ai");
  if (fs.existsSync(local)) return local;
  return path.join(
    projectRoot,
    "node_modules/@supersoniks/concorde/ai",
  );
}

function resolveAiInitScript() {
  if (process.env.CONCORDE_AI_INIT) {
    return path.resolve(process.env.CONCORDE_AI_INIT);
  }
  const local = path.resolve(projectRoot, "../concorde/scripts/ai-init.mjs");
  if (fs.existsSync(local)) return local;
  return path.join(
    projectRoot,
    "node_modules/@supersoniks/concorde/scripts/ai-init.mjs",
  );
}

const concordeAi = resolveConcordeAi();
const aiInit = resolveAiInitScript();

if (!fs.existsSync(aiInit)) {
  console.error("Script ai-init.mjs introuvable. Lancez yarn install.");
  process.exit(1);
}

const result = spawnSync(
  process.execPath,
  [
    aiInit,
    "--project-root",
    projectRoot,
    "--concorde-ai",
    concordeAi,
  ],
  {stdio: "inherit"},
);

process.exit(result.status ?? 1);
