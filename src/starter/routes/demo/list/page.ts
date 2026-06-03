import {html} from "lit";
import {scopeCallout} from "../../../components/scope-callout";
import "../../../demo/components/demo-list-templates";
import {starterCard} from "../../../components/starter-card";

export default function DemoListPage() {
  return starterCard(
    "sonic-list",
    html`<div class="space-y-4">
      ${scopeCallout("api")}
      <p class="text-sm text-neutral-600">
        Templates: <code>.items</code> · <code>.noItems</code> ·
        <code>.skeleton</code>
      </p>
      <demo-list-templates></demo-list-templates>
    </div>`,
    {path: "src/starter/demo/components/demo-list-templates.ts", label: "list-templates"},
  );
}
