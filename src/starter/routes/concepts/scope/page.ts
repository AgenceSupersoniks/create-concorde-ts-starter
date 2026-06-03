import {html} from "lit";
import "@supersoniks/concorde/sonic-scope";
import {getMockApiServiceUrl} from "../../../demo/api/config";
import "../../../concepts/components/scope-get-demo";
import "../../../concepts/components/api-config-summary";
import {starterCard} from "../../../components/starter-card";

export default function ConceptScopePage() {
  const mockUrl = getMockApiServiceUrl();

  return starterCard(
    "Scope",
    html`<div class="space-y-5">
      <p class="text-sm text-neutral-600 leading-relaxed">
        Wrap your app in a <strong>scope</strong> element. Nested components
        inherit its attributes — no need to repeat <code>serviceURL</code> on
        every <code>@get</code>, list, or queue.
      </p>

      <dl class="text-sm space-y-2">
        <div>
          <dt class="font-semibold">API</dt>
          <dd class="text-neutral-600">
            <code>serviceURL</code>, <code>token</code>,
            <code>credentials</code>…
          </dd>
        </div>
        <div>
          <dt class="font-semibold">Forms</dt>
          <dd class="text-neutral-600">
            <code>formDataProvider</code>, <code>dataProvider</code>
          </dd>
        </div>
        <div>
          <dt class="font-semibold">Icons</dt>
          <dd class="text-neutral-600">
            <code>customIconLibraryPath</code> →
            <code>library="custom"</code>
          </dd>
        </div>
      </dl>

      <pre
        class="text-xs font-mono bg-neutral-100/90 rounded p-4 overflow-x-auto whitespace-pre-wrap"
      ><code>&lt;sonic-scope
  serviceURL="${mockUrl}"
  token="…"
  formDataProvider="checkout"
&gt;
  …app…
&lt;/sonic-scope&gt;</code></pre>

      <div class="space-y-2">
        <h3 class="text-sm font-semibold">APIConfiguration</h3>
        <p class="text-sm text-neutral-600">
          API settings map to the <code>APIConfiguration</code> type — either
          as scope attributes or as a DataProvider object.
        </p>
        <concept-api-config-summary></concept-api-config-summary>
      </div>

      <div class="space-y-2">
        <h3 class="text-sm font-semibold">Two ways to configure API</h3>
        <ul class="text-sm text-neutral-600 list-disc pl-5 space-y-1">
          <li>
            <strong>Scope</strong> —
            <code>@get(endpoint)</code> inherits
            <code>serviceURL</code> (demo below)
          </li>
          <li>
            <strong>DataProvider</strong> —
            <code>@get(endpoint, apiConfigKey)</code> — see
            <a href="/demo/get" class="underline">/demo/get</a>
          </li>
        </ul>
      </div>

      <div class="space-y-2">
        <p class="text-xs text-neutral-500">Scoped @get (no config key):</p>
        <sonic-scope
          serviceURL=${mockUrl}
          class="block p-4 border border-neutral-200 rounded-md"
        >
          <concept-scope-get-demo></concept-scope-get-demo>
        </sonic-scope>
      </div>

      <p class="text-xs text-neutral-500">
        Colors and fonts: <a href="/ui" class="underline">theme</a> — not scope.
      </p>
    </div>`,
    [
      {path: "src/starter/routes/concepts/scope/page.ts"},
      {path: "src/starter/concepts/components/scope-get-demo.ts", label: "scope-get-demo"},
      {path: "src/starter/concepts/components/api-config-summary.ts", label: "api-config"},
    ],
  );
}
