import {html} from "lit";
import {conceptFormKey, counterKey} from "../../../concepts/dp";

export default function ConceptDataProviderPage() {
  return html`
    <section class="space-y-4">
      <h2 class="text-2xl font-bold">DataProvider</h2>
      <p class="text-neutral-600 text-sm leading-relaxed">
        Un <strong>DataProvider</strong> est un store partagé, adressé par un
        chemin (<code>starterConceptCounter</code>,
        <code>starterConceptForm.value</code>…). Les composants et décorateurs
        s’y abonnent ou y écrivent sans se référencer directement.
      </p>
      <p class="text-neutral-600 text-sm leading-relaxed">
        En HTML : <code>dataProvider</code>, <code>formDataProvider</code>,
        <code>dataFilterProvider</code>. En TypeScript :
      </p>
      <pre
        class="text-xs font-mono bg-neutral-100/80 rounded p-4 overflow-x-auto"
      ><code>import { get, set } from "src/utils/dataprovider";
// get = alias Concorde dp (instance DataProvider)

set("starterConceptCounter", { count: 0 });
get("starterConceptCounter").count.set(1);</code></pre>
      <p class="text-xs text-neutral-500">
        Réexport documenté : <code>src/utils/dataprovider.ts</code>
      </p>
      <dl class="text-sm font-mono space-y-2 bg-neutral-100/80 rounded p-4">
        <div>
          <dt class="text-neutral-500">Exemples dans le starter</dt>
          <dd class="mt-1 space-y-1">
            <div>${counterKey.path}</div>
            <div>${conceptFormKey.path} → ${conceptFormKey.value.path}</div>
          </dd>
        </div>
      </dl>
    </section>
  `;
}
