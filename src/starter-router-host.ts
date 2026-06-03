import {html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import "@supersoniks/concorde/sonic-scope";
import {getMockApiServiceUrl} from "./starter/demo/api/config";
import {router} from "./starter/routes/router";

/**
 * Routing entry point. Kit routes: `src/starter/routes/`.
 * After removing `src/starter/`: see GETTING_STARTED.md.
 *
 * sonic-scope: default mock API base URL for scoped @get / list / queue.
 */
@customElement("starter-router-host")
export class StarterRouterHost extends LitElement {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    const path = document.location.pathname;
    if (!path || path === "/index.html") {
      history.replaceState(null, "", "/");
    }
  }

  render() {
    return html`
      <sonic-scope
        serviceURL=${getMockApiServiceUrl()}
        customIconLibraryPath="https://cdnjs.cloudflare.com/ajax/libs/iconoir/5.1.4/icons/$name.svg"
      >
        ${router("")}
      </sonic-scope>
    `;
  }
}
