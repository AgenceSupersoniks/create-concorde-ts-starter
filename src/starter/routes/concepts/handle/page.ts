import {html} from "lit";
import "../../../concepts/components/handle-demo";

export default function ConceptHandlePage() {
  return html`
    <section class="space-y-4">
      <h2 class="text-2xl font-bold">@handle</h2>
      <p class="text-neutral-600 text-sm leading-relaxed">
        Même principe de publication (<code>@publish</code> sur le compteur).
        <code>@handle</code> appelle une méthode typée à chaque assignation sur
        la clé — effet de bord sans afficher via <code>@subscribe</code>.
      </p>
      <concept-handle-demo></concept-handle-demo>
    </section>
  `;
}
