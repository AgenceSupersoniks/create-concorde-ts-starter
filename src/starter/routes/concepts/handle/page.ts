import {html} from "lit";
import "../../../concepts/components/handle-demo";
import {starterCard} from "../../../components/starter-card";

export default function ConceptHandlePage() {
  return starterCard(
    "@handle",
    html`<div class="space-y-4">
      <p class="text-sm text-neutral-600">Side effect on write.</p>
      <concept-handle-demo></concept-handle-demo>
    </div>`,
    {path: "src/starter/concepts/components/handle-demo.ts", label: "handle-demo"},
  );
}
