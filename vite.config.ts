import { defineConfig } from "vite";
var postcssLit = require("rollup-plugin-postcss-lit");

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'Main',
      fileName: (format) => `main.${format}.js`
    }
  },
  plugins: [
    postcssLit({
      include: [
        "/src/**/*.css",
        "/src/**/*.css?*",
      ],
    }),
  ],
});
