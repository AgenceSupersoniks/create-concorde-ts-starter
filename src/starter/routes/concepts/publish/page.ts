import {html} from "lit";
import "../../../concepts/components/publish-demo";
import {starterCard} from "../../../components/starter-card";

export default function ConceptPublishPage() {
  return starterCard(
    "@publish + @subscribe",
    html`<div class="space-y-4">
      <p class="text-sm text-neutral-600">
        <code>@publish</code> writes · <code>@subscribe</code> reads.
      </p>
      <concept-publish-demo></concept-publish-demo>
    </div>`,
    {path: "src/starter/concepts/components/publish-demo.ts", label: "publish-demo"},
  );
}
