import {defineConfig} from "vite";
import concordeConf, {
  autoRoutesPlugin,
} from "@supersoniks/concorde/vite-config";
import basicSsl from "@vitejs/plugin-basic-ssl";
import path from "path";
import tsConfig from "./tsconfig.json";
import postcssLit from "rollup-plugin-postcss-lit";

export const packages = {
  concorde: {
    outDir: "dist",
  },
};

let libName = process.env.LIB_NAME;
if (!libName) libName = "concorde";
const currentConfig = packages[libName];

const config = {
  build: {
    outDir: currentConfig.outDir,
    emptyOutDir: false,
    lib: currentConfig.lib,
  },
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: true,
      ignored: ["**/*.svg"],
    },
  },
  plugins: [
    // STARTER_HTTP=1 : HTTP simple, pour les navigateurs qui refusent le certificat auto-signé
    ...(process.env.STARTER_HTTP ? [] : [basicSsl()]),
    autoRoutesPlugin("src/app"),
    postcssLit({
      include: ["/src/**/*.css", "/src/**/*.css?*"],
    }),
  ],
  resolve: {
    alias: {
      "@tailwind": path.resolve(__dirname, "./src/css/tailwind.ts"),
    },
  },
};

export default defineConfig(
  concordeConf({
    componentPrefix: "sonic",
    tsConfig: tsConfig,
    viteConfig: config,
  })
);
