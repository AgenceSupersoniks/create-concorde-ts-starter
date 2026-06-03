import {html, LitElement} from "lit";
import {customElement, state} from "lit/decorators.js";
import {subscribe} from "@supersoniks/concorde/decorators";
import {conceptFormKey} from "../dp";
import tailwind from "../../../tailwind";

/** Reads @subscribe — reads the DataProvider fed by formDataProvider. */
@customElement("concept-form-subscribe")
export class ConceptFormSubscribe extends LitElement {
  static styles = [tailwind];

  @subscribe(conceptFormKey.value)
  @state()
  value = "";

  render() {
    return html`
      <p class="text-lg">
        Read: <strong>${this.value || "—"}</strong>
      </p>
    `;
  }
}
