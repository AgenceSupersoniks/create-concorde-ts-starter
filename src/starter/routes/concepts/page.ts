import {html} from "lit";

export default function ConceptsIndexPage() {
  return html`
    <section class="space-y-4">
      <h2 class="text-2xl font-bold">Concepts de base</h2>
      <p class="text-neutral-600 text-sm leading-relaxed">
        Commencer par <strong>DataProvider</strong> (store partagé), puis
        <strong>DataProviderKey</strong> et <strong>Endpoint</strong> (chemins
        typés), ensuite les décorateurs et les formulaires.
      </p>
      <p class="text-sm text-neutral-500">
        Utilisez le menu à gauche pour naviguer entre les pages.
      </p>
    </section>
  `;
}
