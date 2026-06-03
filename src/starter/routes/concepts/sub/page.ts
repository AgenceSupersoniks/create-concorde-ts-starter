import {html} from "lit";
import {sub} from "@supersoniks/concorde/directives";
import "@supersoniks/concorde/input";
import {conceptFormKey} from "../../../concepts/dp";

export default function ConceptSubPage() {
  return html`
    <section class="space-y-6">
      <h2 class="text-2xl font-bold">sub() — alternative d’affichage</h2>
      <p class="text-neutral-600 text-sm leading-relaxed">
        Même formulaire <code>formDataProvider</code>. Au lieu d’un composant
        <code>@subscribe</code>, la directive Lit <code>sub("chemin")</code>
        lit le DataProvider directement dans le template — pratique pour un
        affichage simple sans classe dédiée.
      </p>
      <div formDataProvider=${conceptFormKey.path} class="max-w-md">
        <sonic-input name="value" label="Votre texte"></sonic-input>
      </div>
      <p class="text-lg">
        <code>sub()</code> :
        <strong>${sub(`${conceptFormKey.path}.value`)}</strong>
      </p>
    </section>
  `;
}
