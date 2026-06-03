import {html, LitElement} from "lit";
import {customElement, state} from "lit/decorators.js";
import "@supersoniks/concorde/button";
import {publish, subscribe} from "@supersoniks/concorde/decorators";
import {set} from "../../../utils/dataprovider";
import {counterKey} from "../dp";
import tailwind from "../../../tailwind";

/**
 * @publish écrit dans le DataProvider ; @subscribe lit la même clé pour l’affichage.
 */
@customElement("concept-publish-demo")
export class ConceptPublishDemo extends LitElement {
  static styles = [tailwind];

  @publish(counterKey.count)
  @state()
  count = 0;

  @subscribe(counterKey.count)
  @state()
  subscribedCount = 0;

  connectedCallback() {
    super.connectedCallback();
    set(counterKey.path, {count: 0});
  }

  private increment() {
    this.count = this.count + 1;
  }

  render() {
    return html`
      <div class="space-y-4">
        <sonic-button type="button" variant="primary" @click=${this.increment}>
          +1 (@publish)
        </sonic-button>
        <p class="text-lg">
          Lu via <code>@subscribe</code> :
          <strong>${this.subscribedCount}</strong>
        </p>
        <p class="text-xs text-neutral-500 font-mono">
          DataProvider : ${counterKey.path} → ${counterKey.count.path}
        </p>
      </div>
    `;
  }
}
