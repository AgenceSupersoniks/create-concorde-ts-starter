import {LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {router} from "./starter/routes/router";

/**
 * Point d’entrée du routage. Routes du kit : `src/starter/routes/`.
 * Après suppression de `src/starter/` : voir GETTING_STARTED.md.
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
    return router("");
  }
}
