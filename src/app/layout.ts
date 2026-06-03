import {html} from "lit";
import type {DirectiveResult} from "lit/directive.js";

/** Layout minimal (utilisé après suppression du kit starter). */
export default (children: DirectiveResult) => html`
  <div class="min-h-screen px-4 py-8">${children}</div>
`;
