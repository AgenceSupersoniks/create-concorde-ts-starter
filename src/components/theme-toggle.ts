import {html, LitElement} from "lit";
import {customElement, state} from "lit/decorators.js";
import "@supersoniks/concorde/button";
import "@supersoniks/concorde/icon";

type ColorMode = "light" | "dark";

/** Same key as the inline script in index.html, which applies it before first paint. */
const STORAGE_KEY = "theme";

function currentMode(): ColorMode {
  const forced = document.documentElement.dataset.theme;
  if (forced === "light" || forced === "dark") return forced;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Light / dark switch: sets data-theme on <html>; the tokens in app.css follow. */
@customElement("app-theme-toggle")
export class AppThemeToggle extends LitElement {
  @state() mode: ColorMode = currentMode();

  protected createRenderRoot() {
    return this;
  }

  private toggle() {
    this.mode = this.mode === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = this.mode;
    try {
      localStorage.setItem(STORAGE_KEY, this.mode);
    } catch {
      // private mode: the choice lasts for this page only
    }
  }

  render() {
    const dark = this.mode === "dark";
    return html`
      <sonic-button
        variant="ghost"
        shape="circle"
        icon
        data-aria-label=${dark ? "Switch to light mode" : "Switch to dark mode"}
        @click=${this.toggle}
      >
        <sonic-icon
          library="iconoir"
          name=${dark ? "half-moon" : "sun-light"}
        ></sonic-icon>
      </sonic-button>
    `;
  }
}
