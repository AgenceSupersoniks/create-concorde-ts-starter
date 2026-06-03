import {html} from "lit";
import {scopeCallout} from "../../../components/scope-callout";
import "../../../demo/components/demo-queue-templates";
import {starterCard} from "../../../components/starter-card";

export default function DemoQueuePage() {
  return starterCard(
    "sonic-queue",
    html`<div class="space-y-4">
      ${scopeCallout("api")}
      <p class="text-sm text-neutral-600">Infinite scroll · same templates as list.</p>
      <demo-queue-templates></demo-queue-templates>
    </div>`,
    {path: "src/starter/demo/components/demo-queue-templates.ts", label: "queue-templates"},
  );
}
