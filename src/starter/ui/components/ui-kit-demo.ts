import {html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import "@supersoniks/concorde/alert";
import "@supersoniks/concorde/badge";
import "@supersoniks/concorde/button";
import "@supersoniks/concorde/card";
import "@supersoniks/concorde/card-header";
import "@supersoniks/concorde/form-actions";
import "@supersoniks/concorde/form-layout";
import "@supersoniks/concorde/icon";
import "@supersoniks/concorde/input";
import "@supersoniks/concorde/select";
import "@supersoniks/concorde/switch";
import "@supersoniks/concorde/theme";
import tailwind from "../../../tailwind";

type UiBlock = {title: string; demo: ReturnType<typeof html>};

@customElement("starter-ui-kit-demo")
export class StarterUiKitDemo extends LitElement {
  static styles = [tailwind];

  private block({title, demo}: UiBlock) {
    return html`
      <section class="space-y-3 pb-8 border-b border-neutral-200/80 last:border-0">
        <h3 class="text-base font-semibold">${title}</h3>
        <div>${demo}</div>
      </section>
    `;
  }

  render() {
    const blocks: UiBlock[] = [
      {
        title: "Theme — tokens in app.css",
        demo: html`
          <div class="grid sm:grid-cols-2 gap-3 max-w-2xl">
            <sonic-theme background color font class="block">
              <sonic-card type="base">
                <sonic-card-header label="Light"></sonic-card-header>
                <sonic-button type="primary" size="sm">Primary</sonic-button>
              </sonic-card>
            </sonic-theme>
            <sonic-theme theme="dark" background color font class="block">
              <sonic-card type="base">
                <sonic-card-header label="Dark"></sonic-card-header>
                <sonic-button type="primary" size="sm">Primary</sonic-button>
              </sonic-card>
            </sonic-theme>
          </div>
        `,
      },
      {
        title: "Buttons & badges",
        demo: html`
          <div class="flex flex-wrap gap-2 items-center">
            <sonic-button type="primary">Save</sonic-button>
            <sonic-button variant="outline">Cancel</sonic-button>
            <sonic-badge type="success">Active</sonic-badge>
          </div>
        `,
      },
      {
        title: "Card",
        demo: html`
          <sonic-card type="base" class="max-w-sm">
            <sonic-card-header label="Account"></sonic-card-header>
          </sonic-card>
        `,
      },
      {
        title: "Form",
        demo: html`
          <form class="max-w-md">
            <sonic-form-layout>
              <sonic-input label="Name" name="displayName"></sonic-input>
              <sonic-form-actions>
                <sonic-button type="primary">Save</sonic-button>
              </sonic-form-actions>
            </sonic-form-layout>
          </form>
        `,
      },
      {
        title: "Alert",
        demo: html`
          <sonic-alert status="success" label="Saved" class="max-w-md">
            Done.
          </sonic-alert>
        `,
      },
    ];

    return html`${blocks.map((b) => this.block(b))}`;
  }
}
