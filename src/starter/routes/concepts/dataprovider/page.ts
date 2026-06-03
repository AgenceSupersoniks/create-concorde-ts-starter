import {html} from "lit";
import {counterKey} from "../../../concepts/dp";
import {starterCard} from "../../../components/starter-card";

export default function ConceptDataProviderPage() {
  return starterCard(
    "DataProvider",
    html`<div class="space-y-3">
      <p class="text-sm text-neutral-600">Shared store by path.</p>
      <pre
        class="text-xs font-mono bg-neutral-100/80 rounded p-4 overflow-x-auto"
      ><code>set("${counterKey.path}", { count: 0 });
get("${counterKey.count.path}").set(1);</code></pre>
    </div>`,
    {path: "src/starter/routes/concepts/dataprovider/page.ts"},
  );
}
