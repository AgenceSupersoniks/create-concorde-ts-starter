import {html, LitElement, css} from "lit";
import {customElement, property} from "lit/decorators.js";
import tailwind from "@tailwind";
import "@supersoniks/concorde/ui/image";
import "@supersoniks/concorde/ui/button";
import Subscriber from "@supersoniks/concorde/core/mixins/Subscriber";

// name component
const tagName = "my-user-card";

@customElement(tagName)
export class user extends Subscriber(LitElement) {
  static styles = [
    tailwind,
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property({type: String}) first_name = "";
  @property({type: String}) last_name = "";
  @property({type: String}) avatar = "";
  @property({type: String}) email = "";

  render() {
    return html`<div
      class="flex items-center gap-3 rounded-md hover:bg-neutral-50 -mx-2 p-2"
    >
      <sonic-image
        src="${this.avatar}"
        rounded="md"
        ratio="1/1"
        class="w-16 block"
      ></sonic-image>
      <div>
        <div>
          ${this.first_name} <span class="font-bold">${this.last_name}</span>
        </div>
        <div class="text-sm text-neutral-400">${this.email}</div>
      </div>
      <div class="ml-auto relative">
        <sonic-button
          href="mailto:${this.email}"
          size="sm"
          variant="outline"
          shape="circle"
          class="relative"
          icon
        >
          <sonic-icon
            name="envelope"
            library="heroicons"
            prefix="outline"
          ></sonic-icon>
        </sonic-button>
      </div>
    </div>`;
  }
}
