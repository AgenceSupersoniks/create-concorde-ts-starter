import {html} from "lit";

/** Short sonic-theme reminder — link to `/ui` (design tokens, not API). */
export function themeCallout() {
  return html`
    <p
      class="text-xs text-neutral-500 border-l-2 border-primary/30 pl-3 leading-relaxed"
    >
      <strong>Theme:</strong> surface, text, and font tokens via CSS
      variables —
      <a href="/ui" class="underline ml-1">UI kit</a>.
    </p>
  `;
}
