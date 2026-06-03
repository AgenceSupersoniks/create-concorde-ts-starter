import {html} from "lit";
import "@supersoniks/concorde/menu";
import "@supersoniks/concorde/menu-item";
import "@supersoniks/concorde/divider";

export default function StarterKitLandingPage() {
  return html`
    <div class="min-h-[70vh] flex items-center justify-center px-4">
      <div class="text-center space-y-6 max-w-md">
        <h1 class="text-4xl font-bold tracking-tight">concorde</h1>
        <p class="text-neutral-600">Votre projet est prêt.</p>
        <sonic-menu direction="column" align="center" size="sm">
          <sonic-menu-item pushstate href="/concepts/dataprovider" autoActive="strict">
            Parcourir les concepts
          </sonic-menu-item>
          <sonic-menu-item pushstate href="/demo/get" autoActive="strict">
            Utilisations classiques
          </sonic-menu-item>
        </sonic-menu>
        <p class="text-xs text-neutral-400">
          Kit pédagogique dans <code>src/starter/</code> — supprimable.
        </p>
      </div>
    </div>
  `;
}
