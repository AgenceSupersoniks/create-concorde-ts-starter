import {html} from "lit";
import type {DirectiveResult} from "lit/directive.js";
import "@supersoniks/concorde/menu";
import {concordeBrand} from "../concorde-logo";
import "../components/theme-toggle";

/**
 * Root layout: wraps every page of src/app/ (the router renders the page in
 * `children`). Header with brand, navigation and the light / dark switch.
 */
export default (children: DirectiveResult) => html`
  <header class="sticky top-0 z-30 bg-base border-b-2 border-current">
    <div
      class="max-w-4xl mx-auto flex items-center gap-2 sm:gap-4 h-16 px-4 sm:px-6"
    >
      ${concordeBrand({href: "/"})}
      <nav class="ml-auto">
        <sonic-menu direction="row" size="sm" aria-label="Main">
          <sonic-menu-item
            pushstate
            type="neutral"
            href="/"
            autoActive="strict"
          >
            Home
          </sonic-menu-item>
          <sonic-menu-item
            pushstate
            type="neutral"
            href="/demo"
            autoActive="strict"
          >
            Demo
          </sonic-menu-item>
        </sonic-menu>
      </nav>
      <app-theme-toggle></app-theme-toggle>
    </div>
  </header>
  <main class="max-w-4xl mx-auto px-4 sm:px-6 py-10">${children}</main>
`;
