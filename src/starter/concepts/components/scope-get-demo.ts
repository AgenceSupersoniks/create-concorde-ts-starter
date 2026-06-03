import {html, LitElement} from "lit";
import {customElement, state} from "lit/decorators.js";
import {get, type ApiGetResult} from "@supersoniks/concorde/decorators";
import {starterCommunesEndpoint} from "../../demo/api/endpoints";
import type {GeoCommuneRow} from "../../demo/api/types";
import tailwind from "../../../tailwind";

/** @get without API config key — inherits serviceURL from scope ancestor. */
@customElement("concept-scope-get-demo")
export class ConceptScopeGetDemo extends LitElement {
  static styles = [tailwind];

  @get(starterCommunesEndpoint)
  @state()
  payload: ApiGetResult<GeoCommuneRow[]> | null = null;

  render() {
    const rows = this.payload?.result?.slice(0, 3);
    return html`
      <div class="text-sm space-y-1">
        ${this.payload === null
          ? html`<p class="text-neutral-500">Loading…</p>`
          : html`
              <ul class="list-disc pl-5 text-xs font-mono">
                ${rows?.map((c) => html`<li>${c.nom}</li>`)}
              </ul>
            `}
      </div>
    `;
  }
}
