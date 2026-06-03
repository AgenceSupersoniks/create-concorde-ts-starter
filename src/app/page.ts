/**
 * Modèle minimal après suppression de `src/starter/`.
 * Activer `autoRoutesPlugin("src/app")` dans vite.config.mts et
 * `import { router } from "./app/router"` dans starter-router-host.ts.
 */
import {html} from "lit";

export default function HomePage() {
  return html`
    <div class="min-h-[70vh] flex items-center justify-center text-center">
      <h1 class="text-4xl font-bold">concorde</h1>
    </div>
  `;
}
