import "@supersoniks/concorde/input";
import "@supersoniks/concorde/queue";
import {html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import type {DirectiveResult} from "lit/directive.js";
import {getMockApiServiceUrl} from "../api/config";
import {demoUsersFilterKey} from "../dp";
import type {ReqresUser} from "../api/types";
import tailwind from "../../../tailwind";

type DemoSection = {
  title: string;
  description: string;
  code: string;
  demo: DirectiveResult;
};

@customElement("demo-queue-templates")
export class DemoQueueTemplates extends LitElement {
  static styles = [tailwind];

  private renderUser = (user: ReqresUser): DirectiveResult => html`
    <div class="flex items-center gap-3 p-3 border border-neutral-200 rounded-md">
      <div>
        <div class="font-medium">${user.first_name} ${user.last_name}</div>
        <div class="text-sm text-neutral-500">${user.email}</div>
      </div>
    </div>
  `;

  private renderSeparator = (): DirectiveResult => html`
    <div class="border-t border-dashed border-neutral-200 my-1"></div>
  `;

  private noItems = (): DirectiveResult => html`
    <p class="text-sm text-neutral-500 italic p-4 text-center">
      No users — <code>.noItems</code> property
    </p>
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

    const sections: DemoSection[] = [
      {
        title: "Infinite scroll + search",
        description: "Same templates as list.",
        code: `<sonic-queue lazyload
  dataFilterProvider="demoUsersFilter"
  dataProviderExpression="users?offset=$offset&limit=$limit"
  .items=\${renderUser}
  .noItems=\${noItems}
/>`,
        demo: html`
          <div
            formDataProvider=${demoUsersFilterKey.path}
            class="max-w-md mb-3"
          >
            <sonic-input
              name="q"
              type="search"
              label="Search"
              placeholder="First name, last name, or email"
            ></sonic-input>
          </div>
          <sonic-queue
            lazyload
            dataFilterProvider=${demoUsersFilterKey.path}
            dataProviderExpression="users?offset=$offset&limit=$limit"
            serviceurl=${base}
            key="data"
            limit="4"
            idKey="id"
            class="grid gap-2 max-w-md max-h-96 overflow-y-auto"
            .items=${this.renderUser}
            .separator=${this.renderSeparator}
            .noItems=${this.noItems}
          ></sonic-queue>
        `,
      },
      {
        title: "`.noItems`",
        description: 'Search "zzz" above.',
        code: `.noItems=\${() => html\`<p>No results</p>\`}`,
        demo: html`
          <p class="text-xs text-neutral-500">
            Try it in the demo above with an impossible search.
          </p>
        `,
      },
    ];

    return html`${sections.map((s) => this.section(s))}`;
  }
}
