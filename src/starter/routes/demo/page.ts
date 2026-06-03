import {html} from "lit";

export default function DemoIndexPage() {
  return html`
    <section class="space-y-4">
      <h2 class="text-2xl font-bold">Utilisations classiques</h2>
      <p class="text-neutral-600 text-sm leading-relaxed">
        Exemples dans <code>src/demo/</code>, branchés sur le mock
        <code>/mock-api</code> et <code>starterApiConfiguration</code>.
      </p>
      <p class="text-sm text-neutral-500">
        Menu : <strong>@get</strong>, <strong>sonic-list</strong>,
        <strong>sonic-queue</strong> (scroll infini + recherche).
      </p>
    </section>
  `;
}
