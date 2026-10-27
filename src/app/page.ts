import {html} from "lit";
import "@supersoniks/concorde/button";
import "@supersoniks/concorde/icon";

/** Route "/" — src/app/page.ts */
export default function HomePage() {
  return html`
    <div class="flex flex-col gap-10">
      <section
        class="flex flex-col gap-6 p-8 sm:p-12 bg-warning text-warning-content"
      >
        <span class="font-mono text-xs uppercase tracking-widest"
          >Concorde starter</span
        >
        <h1 class="font-headings text-5xl sm:text-6xl leading-[1.02] max-w-xl">
          Your Concorde app starts here.
        </h1>
        <p class="max-w-lg">
          Lit web components, a shared DataProvider store and a file-based
          router. Three pages to start from: this one, a demo and a 404.
        </p>
        <div class="flex flex-wrap gap-3">
          <sonic-button type="primary" pushstate href="/demo">
            See the demo
            <sonic-icon
              slot="suffix"
              library="iconoir"
              name="arrow-right"
            ></sonic-icon>
          </sonic-button>
          <sonic-button
            variant="outline"
            href="https://concorde.supersoniks.org/"
            target="_blank"
          >
            <sonic-icon
              slot="prefix"
              library="iconoir"
              name="open-book"
            ></sonic-icon>
            Docs
          </sonic-button>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="font-headings text-2xl">Routing</h2>
        <p>
          Each folder of <code>src/app/</code> is a route. The router is
          generated into <code>src/app/router.ts</code> when you add or remove a
          file during <code>yarn dev</code>.
        </p>
        <pre
          class="p-4 bg-neutral-50 font-mono text-sm overflow-x-auto"
        ><code>src/app/
├── layout.ts      wraps every page (header, navigation)
├── page.ts        /
├── 404.ts         any unknown path
└── demo/
    └── page.ts    /demo</code></pre>
        <p class="text-sm text-neutral-600">
          Add <code>src/app/flights/page.ts</code> for <code>/flights</code>, a
          <code>layout.ts</code> in a folder to wrap its pages, and
          <code>[code]</code> as a folder name for a parameter
          (<code>/flights/:code</code>). Links use
          <code>pushstate href="…"</code> on <code>sonic-button</code> or
          <code>sonic-menu-item</code>.
        </p>
      </section>
    </div>
  `;
}
