import {html} from "lit";
import "@supersoniks/concorde/button";
import "@supersoniks/concorde/icon";

/** Fallback for any unknown path — src/app/404.ts */
export default function NotFoundPage() {
  return html`
    <section class="flex flex-col items-start gap-4 py-8">
      <span class="font-mono text-xs uppercase tracking-widest text-neutral-600"
        >Flight not found</span
      >
      <h1 class="font-headings text-7xl">404</h1>
      <p>This page left without you.</p>
      <sonic-button type="primary" pushstate href="/">
        <sonic-icon
          slot="prefix"
          library="iconoir"
          name="arrow-left"
        ></sonic-icon>
        Back home
      </sonic-button>
    </section>
  `;
}
