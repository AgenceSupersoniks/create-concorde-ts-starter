import {LitElement} from "lit";
import {customElement} from "lit/decorators.js";
// Generated from the folders of src/app/ by autoRoutesPlugin (vite.config.mts)
import {router} from "./app/router";

/** App root: renders the file-based router of src/app/. */
@customElement("app-root")
export class AppRoot extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  render() {
    return router("");
  }
}
