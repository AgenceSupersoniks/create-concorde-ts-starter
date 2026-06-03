import {html} from "lit";
import {scopeCallout} from "../../components/scope-callout";
import {starterCard} from "../../components/starter-card";

export default function ConceptsIndexPage() {
  return starterCard(
    "Data concepts",
    html`<div class="space-y-3">
      <p class="text-sm text-neutral-600">
        DataProvider → DataProviderKey → Endpoint → decorators. Scope is in its
        own menu section (above @get).
      </p>
      ${scopeCallout("api")}
    </div>`,
    {path: "src/starter/routes/concepts/page.ts"},
  );
}
