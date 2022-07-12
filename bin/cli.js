#!/usr/bin/env node

const { execSync } = require('child_process');
const runCommand = command => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
}
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/AgenceSupersoniks/create-concorde-ts-starter ${repoName}`;
const removeDotGitCommand = `rm -rf ${repoName}/.git`;
const installDepsCommand = `cd ${repoName} && yarn install`
const enableShortPathCmd = `cd ${repoName} && npx concorde enable-short-paths`;
console.log(`Cloning repository with name ${repoName}`);
const checkout = runCommand(gitCheckoutCommand)
if (!checkout) process.exit(-1);

const removeDotGit = runCommand(removeDotGitCommand);
if (!removeDotGit) process.exit(-1);

console.log(`installing dependencies for ${repoName}`);
const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit(-1);

const enableShortPath = runCommand(enableShortPathCmd);
if (!enableShortPath) process.exit(-1);

let path = require("path");
let fs = require("fs");
const packageJsonPath = path.join(process.cwd(), repoName, "package.json");
const packageJson = require(packageJsonPath);
packageJson.name = repoName;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log("Congratulations! You are ready. Follow the following commands to start");
console.log(`cd ${repoName} && yarn dev`);

