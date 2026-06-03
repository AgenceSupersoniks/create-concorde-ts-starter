import {html} from "lit";
import {scopeCallout} from "../../../components/scope-callout";
import {starterApiConfigKey} from "../../../demo/api/config";
import "../../../demo/components/demo-get";
import {starterCard} from "../../../components/starter-card";

export default function DemoGetPage() {
  return starterCard(
    "@get",
    html`<div class="space-y-4">
      ${scopeCallout("api")}
      <p class="text-sm text-neutral-600 leading-relaxed">
        <code>@get</code> fetches one endpoint and stores the result on a
        decorated property (<code>ApiGetResult&lt;T&gt;</code>). The component
        re-renders when data arrives.
      </p>

      <div class="space-y-2">
        <h3 class="text-sm font-semibold">API configuration</h3>
        <p class="text-sm text-neutral-600">
          <code>@get</code> needs an <code>APIConfiguration</code> (base URL,
          token, credentials…). Two options:
        </p>
        <ul class="text-sm text-neutral-600 list-disc pl-5 space-y-1">
          <li>
            <strong>Scope</strong> — omit the config key;
            <code>serviceURL</code> comes from an ancestor scope —
            <a href="/concepts/scope" class="underline">/concepts/scope</a>
          </li>
          <li>
            <strong>DataProvider</strong> — pass a
            <code>DataProviderKey&lt;APIConfiguration&gt;</code> as second
            argument (this demo)
          </li>
        </ul>
      </div>

      <pre
        class="text-xs font-mono bg-neutral-100/90 rounded p-4 overflow-x-auto whitespace-pre-wrap"
      ><code>@get(starterCommunesEndpoint, starterApiConfigKey)
@state()
payload: ApiGetResult&lt;GeoCommuneRow[]&gt; | null = null;

// config published in src/starter/demo/api/config.ts
set("${starterApiConfigKey.path}", { serviceURL: "…", credentials: "same-origin" });</code></pre>

      <demo-get></demo-get>
    </div>`,
    [
      {path: "src/starter/routes/demo/get/page.ts"},
      {path: "src/starter/demo/components/demo-get.ts", label: "demo-get"},
      {path: "src/starter/demo/api/config.ts", label: "api config"},
    ],
  );
}
