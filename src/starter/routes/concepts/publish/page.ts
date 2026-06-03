import {html} from "lit";
import "../../../concepts/components/publish-demo";

export default function ConceptPublishPage() {
  return html`
    <section class="space-y-4">
      <h2 class="text-2xl font-bold">@publish + @subscribe</h2>
      <p class="text-neutral-600 text-sm leading-relaxed">
        Le bouton incrémente une propriété décorée avec
        <code>@publish</code> : la valeur part dans le DataProvider (
        <code>DataProviderKey</code>). Une autre propriété
        <code>@subscribe</code> + <code>@state</code> suit ce DataProvider et
        alimente le template.
      </p>
      <concept-publish-demo></concept-publish-demo>
    </section>
  `;
}
