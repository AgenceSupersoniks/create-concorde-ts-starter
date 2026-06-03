import {html, LitElement} from "lit";
import {customElement, state} from "lit/decorators.js";
import "@supersoniks/concorde/button";
import {handle, publish} from "@supersoniks/concorde/decorators";
import {set} from "../../../utils/dataprovider";
import {counterKey} from "../dp";
import tailwind from "../../../tailwind";

/** Same counter: @publish on the button, @handle reacts on every change. */
@customElement("concept-handle-demo")
export class ConceptHandleDemo extends LitElement {
  static styles = [tailwind];

  @publish(counterKey.count)
  @state()
  count = 0;

  @state()
  lastHandledCount = 0;

  @state()
  handleCallCount = 0;

  @handle(counterKey.count)
  onCountChanged(value: number) {
    this.lastHandledCount = value;
    this.handleCallCount = this.handleCallCount + 1;
  }

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
        <p class="text-sm">@handle saw: <strong>${this.lastHandledCount}</strong> (${this.handleCallCount}×)</p>
      </div>
    `;
  }
}
