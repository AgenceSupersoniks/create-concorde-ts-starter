import {html, LitElement} from "lit";
import {customElement, state} from "lit/decorators.js";
import {get, type ApiGetResult} from "@supersoniks/concorde/decorators";
import {starterApiConfigKey} from "../api/config";
import {starterCommunesEndpoint} from "../api/endpoints";
import type {GeoCommuneRow} from "../api/types";
import tailwind from "../../../tailwind";

@customElement("demo-get")
export class DemoGet extends LitElement {
  static styles = [tailwind];

  @get(starterCommunesEndpoint, starterApiConfigKey)
  @state()
  payload: ApiGetResult<GeoCommuneRow[]> | null = null;

  render() {
    const rows = this.payload?.result;
    return html`
      <section class="space-y-2">
        <p class="text-sm text-neutral-600">
          <code>@get</code> + <code>${starterApiConfigKey.path}</code>
        </p>
        ${this.payload === null
          ? html`<p class="text-neutral-500">Chargement…</p>`
          : html`
              <ul class="list-disc pl-5 text-sm">
                ${rows?.map(
                  (c) => html`<li>${c.nom} (${c.code})</li>`,
                )}
              </ul>
            `}
      </section>
    `;
  }
}
