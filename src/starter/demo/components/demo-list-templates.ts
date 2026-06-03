import "@supersoniks/concorde/list";
import {html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import type {DirectiveResult} from "lit/directive.js";
import {getMockApiServiceUrl} from "../api/config";
import tailwind from "../../../tailwind";

type DemoSection = {
  title: string;
  description: string;
  code: string;
  demo: DirectiveResult;
};

@customElement("demo-list-templates")
export class DemoListTemplates extends LitElement {
  static styles = [tailwind];

  private renderUser = (
    user: {first_name: string; last_name: string; email: string},
  ): DirectiveResult => html`
    <div class="flex items-center gap-3 p-3 border border-neutral-200 rounded-md">
      <div>
        <div class="font-medium">${user.first_name} ${user.last_name}</div>
        <div class="text-xs text-neutral-500">${user.email}</div>
      </div>
    </div>
  `;

  private renderSeparator = (): DirectiveResult => html`
    <div class="border-t border-dashed border-neutral-200 my-1"></div>
  `;

  private noItems = (): DirectiveResult => html`
    <p class="text-sm text-neutral-500 italic p-3">
      Empty list — <code>.noItems</code> property
    </p>
  `;

  private skeleton = (): DirectiveResult => html`
    <div class="p-3 animate-pulse bg-neutral-100 rounded-md text-sm text-neutral-400">
      Loading… — <code>.skeleton</code> property
    </div>
  `;

  private section({title, description, code, demo}: DemoSection) {
    return html`
      <article class="space-y-3 pb-8 border-b border-neutral-200/80 last:border-0">
        <h3 class="text-lg font-semibold">${title}</h3>
        <p class="text-sm text-neutral-600 leading-relaxed">${description}</p>
        <pre
          class="text-xs font-mono bg-neutral-100/90 rounded p-3 overflow-x-auto whitespace-pre-wrap"
        ><code>${code}</code></pre>
        <div class="pt-1">${demo}</div>
      </article>
    `;
  }

  render() {
    const base = getMockApiServiceUrl();
    const separatorItems = [
      {first_name: "Alice", last_name: "Martin", email: "alice@example.com"},
      {first_name: "Bob", last_name: "Durand", email: "bob@example.com"},
      {first_name: "Claire", last_name: "Bernard", email: "claire@example.com"},
    ];

    const sections: DemoSection[] = [
      {
        title: "`.items`",
        description: "Render each row.",
        code: `.items=\${(user) => html\`
  <div>\${user.first_name} \${user.last_name}</div>
\`}`,
        demo: html`
          <sonic-list
            fetch
            serviceurl=${base}
            endpoint="users?page=1&per_page=3"
            dataprovider="demoListTplItems"
            key="data"
            class="grid gap-2 max-w-md"
            .items=${this.renderUser}
          ></sonic-list>
        `,
      },
      {
        title: "`.separator`",
        description: "Between rows.",
        code: `.separator=\${() => html\`<hr />\`}`,
        demo: html`
          <sonic-list
            dataprovider="demoListTplSep"
            .props=${separatorItems}
            class="max-w-md"
            .items=${this.renderUser}
            .separator=${this.renderSeparator}
          ></sonic-list>
        `,
      },
      {
        title: "`.noItems`",
        description: "Empty list.",
        code: `.noItems=\${() => html\`<p>No results</p>\`}`,
        demo: html`
          <sonic-list
            dataprovider="demoListTplEmpty"
            .props=${[]}
            class="max-w-md"
            .noItems=${this.noItems}
          ></sonic-list>
        `,
      },
      {
        title: "`.skeleton`",
        description: "While fetching.",
        code: `.skeleton=\${() => html\`<div class="animate-pulse">…</div>\`}
.items=\${renderUser}`,
        demo: html`
          <sonic-list
            fetch
            serviceurl=${base}
            endpoint="users?page=1&per_page=2&delay=1500"
            dataprovider="demoListTplSkeleton"
            key="data"
            class="grid gap-2 max-w-md"
            .skeleton=${this.skeleton}
            .items=${this.renderUser}
          ></sonic-list>
        `,
      },
    ];

    return html`${sections.map((s) => this.section(s))}`;
  }
}
