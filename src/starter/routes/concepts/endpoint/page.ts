import {html} from "lit";
import {Endpoint} from "@supersoniks/concorde/utils/endpoint";

const communesExample = new Endpoint<{nom: string; code: string}[]>(
  "communes?limit=5&fields=nom,code",
);

export default function ConceptEndpointPage() {
  return html`
    <section class="space-y-4">
      <h2 class="text-2xl font-bold">Endpoint</h2>
      <p class="text-neutral-600 text-sm leading-relaxed">
        <code>Endpoint&lt;T&gt;</code> décrit un chemin HTTP unique et le type de
        réponse attendu. Contrairement à
        <code>DataProviderKey</code>, pas de navigation par points — une seule
        chaîne (<code>communes?limit=5</code>…).
      </p>
      <p class="text-neutral-600 text-sm leading-relaxed">
        Utilisé avec le décorateur <code>@get</code> ou comme expression pour
        <code>sonic-list</code> / <code>sonic-queue</code>. Les exemples HTTP
        du starter vivent dans <code>src/demo/api/</code> (optionnel).
      </p>
      <dl class="text-sm font-mono space-y-3 bg-neutral-100/80 rounded p-4">
        <div>
          <dt class="text-neutral-500 mb-1">Exemple</dt>
          <dd>${communesExample.path}</dd>
        </div>
      </dl>
      <p class="text-xs text-neutral-500">
        Définitions mock : <code>src/demo/api/endpoints.ts</code>
      </p>
    </section>
  `;
}
