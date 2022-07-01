import { defineConfig } from "vite";
var postcssLit = require("rollup-plugin-postcss-lit");

export default defineConfig({
  plugins: [
    postcssLit({
      include: [
        "/src/**/*.css",
        "/src/**/*.css?*",
      ],
    }),
  ],
});
