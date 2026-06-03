import {html} from "lit";
import "@supersoniks/concorde/menu";
import "@supersoniks/concorde/menu-item";
import {concordeBrand} from "../../concorde-logo";
import {starterCard} from "../components/starter-card";

export default function StarterKitLandingPage() {
  return html`
    <div class="min-h-[70vh] flex items-center justify-center px-4">
      <div class="max-w-xl w-full grid gap-4 mx-auto">
        <div class="flex justify-center mb-2">
          ${concordeBrand({size: "lg"})}
        </div>

        ${starterCard(
          "Starter kit",
          html`
            <p class="text-neutral-600 text-sm">
              Learning kit in <code>src/starter/</code> — delete when done.
            </p>
          `,
        )}

        ${starterCard(
          "Browse",
          html`
            <sonic-menu direction="column" align="left" size="sm">
              <sonic-menu-item pushstate href="/ui" autoActive="strict">
                UI kit
              </sonic-menu-item>
              <sonic-menu-item
                pushstate
                href="/concepts/dataprovider"
                autoActive="strict"
              >
                Data concepts
              </sonic-menu-item>
              <sonic-menu-item pushstate href="/demo/get" autoActive="strict">
                Functional patterns
              </sonic-menu-item>
              <sonic-menu-item
                pushstate
                href="/advanced/dynamic"
                autoActive="strict"
              >
                Advanced patterns
              </sonic-menu-item>
            </sonic-menu>
          `,
        )}
      </div>
    </div>
  `;
}
