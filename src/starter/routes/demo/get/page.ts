import {html} from "lit";
import "../../../demo/components/demo-get";

export default function DemoGetPage() {
  return html`
    <section class="space-y-4">
      <h2 class="text-2xl font-bold">@get</h2>
      <demo-get></demo-get>
    </section>
  `;
}
