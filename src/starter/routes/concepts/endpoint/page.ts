import {html} from "lit";
import {Endpoint} from "@supersoniks/concorde/utils/endpoint";
import {scopeCallout} from "../../../components/scope-callout";
import {starterCard} from "../../../components/starter-card";

const communesExample = new Endpoint<{nom: string; code: string}[]>(
  "communes?limit=5&fields=nom,code",
);

export default function ConceptEndpointPage() {
  return starterCard(
    "Endpoint",
    html`<div class="space-y-3">
      ${scopeCallout("api")}
      <p class="text-sm text-neutral-600">HTTP path + response type.</p>
      <p class="text-xs font-mono bg-neutral-100/80 rounded p-3">
        ${communesExample.path}
      </p>
    </div>`,
    {path: "src/starter/routes/concepts/endpoint/page.ts"},
  );
}
