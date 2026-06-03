import * as esbuild from "esbuild";
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
import type {Connect, Plugin} from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const swEntry = path.join(root, "src/starter/demo/api/service-worker.ts");

const hasDemoApi = fs.existsSync(swEntry);

async function buildDemoApiServiceWorker(): Promise<void> {
  if (!hasDemoApi) return;
  await esbuild.build({
    entryPoints: [swEntry],
    outfile: path.join(root, "public/demo-api-sw.js"),
    bundle: true,
    format: "iife",
    platform: "browser",
    target: "es2020",
    minify: false,
    sourcemap: true,
    logLevel: "silent",
  });
}

/**
 * Middleware mock /mock-api — actif seulement si src/demo/ est présent.
 */
export function demoApiVitePlugin(): Plugin {
  if (!hasDemoApi) {
    return {name: "concorde-demo-api-skipped"};
  }

  const middleware: Connect.NextHandleFunction = async (req, res, next) => {
    if (!req.url || req.method !== "GET") return next();

    const {handleMockApiRequest} = await import("../src/starter/demo/api/router");
    const origin = `https://${req.headers.host ?? "localhost"}`;
    const request = new Request(new URL(req.url, origin), {method: "GET"});

    try {
      const response = await handleMockApiRequest(request);
      if (!response) return next();

      res.statusCode = response.status;
      response.headers.forEach((value, key) => {
        if (key.toLowerCase() === "content-length") return;
        res.setHeader(key, value);
      });
      res.end(Buffer.from(await response.arrayBuffer()));
    } catch {
      next();
    }
  };

  return {
    name: "concorde-demo-api",
    async buildStart() {
      await buildDemoApiServiceWorker();
    },
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}
