import {html} from "lit";
import "../../../demo/components/demo-queue-templates";

export default function DemoQueuePage() {
  return html`
    <section class="space-y-4">
      <h2 class="text-2xl font-bold">sonic-queue — templates</h2>
      <p class="text-neutral-600 text-sm leading-relaxed">
        Même système de templates que <code>sonic-list</code> (propriétés Lit),
        appliqué à chaque lot en scroll infini. Filtre via
        <code>formDataProvider</code> + <code>dataFilterProvider</code>.
      </p>
      <demo-queue-templates></demo-queue-templates>
    </section>
  `;
}
