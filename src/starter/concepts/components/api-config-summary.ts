import {html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import tailwind from "../../../tailwind";

type ApiConfigRow = {
  field: string;
  scope: string;
  dataProvider: string;
};

/** Compact APIConfiguration reference — not exhaustive. */
const rows: ApiConfigRow[] = [
  {
    field: "serviceURL",
    scope: 'serviceURL="https://api…"',
    dataProvider: "serviceURL in starterApiConfiguration",
  },
  {
    field: "token",
    scope: 'token="…" (Bearer)',
    dataProvider: "token: session.accessToken",
  },
  {
    field: "userName / password",
    scope: "Basic auth when no token",
    dataProvider: "userName, password",
  },
  {
    field: "credentials",
    scope: 'credentials="include"',
    dataProvider: 'credentials: "same-origin"',
  },
  {
    field: "authToken",
    scope: 'eventsApiToken="…" (refresh)',
    dataProvider: "authToken",
  },
  {
    field: "tokenProvider",
    scope: 'tokenProvider="/auth/token"',
    dataProvider: "tokenProvider",
  },
];

@customElement("concept-api-config-summary")
export class ConceptApiConfigSummary extends LitElement {
  static styles = [tailwind];

  render() {
    return html`
      <div class="overflow-x-auto">
        <table class="w-full text-xs border-collapse">
          <thead>
            <tr class="border-b border-neutral-200 text-left">
              <th class="py-2 pr-3 font-semibold">APIConfiguration</th>
              <th class="py-2 pr-3 font-semibold">Scope attribute</th>
              <th class="py-2 font-semibold">DataProvider object</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map(
              (row) => html`
                <tr class="border-b border-neutral-100 align-top">
                  <td class="py-2 pr-3 font-mono">${row.field}</td>
                  <td class="py-2 pr-3 text-neutral-600">${row.scope}</td>
                  <td class="py-2 text-neutral-600">${row.dataProvider}</td>
                </tr>
              `,
            )}
          </tbody>
        </table>
      </div>
      <p class="text-xs text-neutral-500 mt-2">
        Type: <code>APIConfiguration</code> —
        <code>@supersoniks/concorde/utils/api</code>. Also:
        <code>cache</code>, <code>blockUntilDone</code>,
        <code>keepAlive</code>, <code>addHTTPResponse</code>.
        Starter: <code>src/starter/demo/api/config.ts</code>.
      </p>
    `;
  }
}
