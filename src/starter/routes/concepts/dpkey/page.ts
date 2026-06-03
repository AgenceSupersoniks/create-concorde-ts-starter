import {html} from "lit";
import {conceptFormKey, counterKey} from "../../../concepts/dp";
import {starterCard} from "../../../components/starter-card";

export default function ConceptDpKeyPage() {
  return starterCard(
    "DataProviderKey",
    html`<div class="space-y-3">
      <p class="text-sm text-neutral-600">Typed path to a store entry.</p>
      <p class="text-xs font-mono text-neutral-500">
        ${counterKey.count.path}<br />
        ${conceptFormKey.value.path}
      </p>
    </div>`,
    {path: "src/starter/routes/concepts/dpkey/page.ts"},
  );
}
