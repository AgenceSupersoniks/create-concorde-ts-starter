import {html} from "lit";
import {conceptFormKey, counterKey} from "../../../concepts/dp";

export default function ConceptDpKeyPage() {
  return html`
    <section class="space-y-4">
      <h2 class="text-2xl font-bold">DataProviderKey</h2>
      <p class="text-neutral-600 text-sm leading-relaxed">
        <code>DataProviderKey&lt;T&gt;</code> construit des chemins typés vers
        un DataProvider. Chaque propriété ou index prolonge le chemin :
        <code>counterKey.count.path</code> →
        <code>${counterKey.count.path}</code>.
      </p>
      <p class="text-neutral-600 text-sm leading-relaxed">
        Utilisé avec <code>@subscribe</code>, <code>@publish</code>,
        <code>@handle</code>, <code>formDataProvider</code> et
        <code>sub("…")</code>.
      </p>
      <dl class="text-sm font-mono space-y-2 bg-neutral-100/80 rounded p-4">
        <div>
          <dt class="text-neutral-500">Compteur</dt>
          <dd>${counterKey.path} → ${counterKey.count.path}</dd>
        </div>
        <div>
          <dt class="text-neutral-500">Formulaire</dt>
          <dd>${conceptFormKey.path} → ${conceptFormKey.value.path}</dd>
        </div>
      </dl>
      <p class="text-xs text-neutral-500">
        Fichier central : <code>src/concepts/dp.ts</code>
      </p>
    </section>
  `;
}
