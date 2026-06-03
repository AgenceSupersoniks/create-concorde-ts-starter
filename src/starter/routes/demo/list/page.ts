import {html} from "lit";
import "../../../demo/components/demo-list-templates";

export default function DemoListPage() {
  return html`
    <section class="space-y-4">
      <h2 class="text-2xl font-bold">sonic-list — templates</h2>
      <p class="text-neutral-600 text-sm leading-relaxed">
        Templates via propriétés Lit : <code>.items</code>,
        <code>.separator</code>, <code>.noItems</code>, <code>.skeleton</code>.
      </p>
      <demo-list-templates></demo-list-templates>
    </section>
  `;
}
