import {html} from "lit";
import type {DirectiveResult} from "lit/directive.js";
import {concordeBrand} from "../../concorde-logo";
import {initStarterKit} from "../init";
import {
  ADVANCED_SECTION,
  CONCEPTS_SECTION,
  DEMO_SECTION,
  SCOPE_SECTION,
  UI_SECTION,
  renderStarterSidebar,
} from "./sidebar";

initStarterKit();

export function renderDocsShell(children: DirectiveResult) {
  const sections = [
    CONCEPTS_SECTION,
    UI_SECTION,
    SCOPE_SECTION,
    DEMO_SECTION,
    ADVANCED_SECTION,
  ];
  return html`
    <div class="max-w-6xl mx-auto px-4 py-8">
      <div class="mb-8">${concordeBrand({href: "/"})}</div>
      <div class="flex gap-10 items-start">
        <aside
          class="w-52 shrink-0 sticky top-8 self-start hidden sm:block"
          aria-label="Table of contents"
        >
          ${renderStarterSidebar(sections)}
        </aside>
        <div class="flex-1 min-w-0">
          <header class="mb-8 sm:hidden">
            ${renderStarterSidebar(sections)}
          </header>
          <main>${children}</main>
        </div>
      </div>
    </div>
  `;
}
