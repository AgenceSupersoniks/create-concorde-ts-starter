import {html} from "lit";
import "@supersoniks/concorde/input";
import {conceptFormKey} from "../../../concepts/dp";
import "../../../concepts/components/form-subscribe";

export default function ConceptFormPage() {
  return html`
    <section class="space-y-6">
      <h2 class="text-2xl font-bold">formDataProvider</h2>
      <p class="text-neutral-600 text-sm leading-relaxed">
        Sur un conteneur, <code>formDataProvider</code> pointe vers le
        DataProvider. Un <code>sonic-input</code> publie via son attribut
        <code>name</code> — sans <code>@input</code> ni callback. L’affichage
        repose ici sur <code>@subscribe</code> + <code>@state</code> dans un
        composant enfant.
      </p>
      <div formDataProvider=${conceptFormKey.path} class="max-w-md">
        <sonic-input name="value" label="Votre texte"></sonic-input>
      </div>
      <concept-form-subscribe></concept-form-subscribe>
    </section>
  `;
}
