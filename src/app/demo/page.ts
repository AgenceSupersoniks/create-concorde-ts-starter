import {html} from "lit";
import "../../components/flight-board";

/** Route "/demo" — src/app/demo/page.ts */
export default function DemoPage() {
  return html`
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <h1 class="font-headings text-4xl">Departures</h1>
        <p class="text-neutral-600">
          The search field and the switch write into the store (<code
            >formDataProvider</code
          >
          + <code>name</code>); the board reads it with
          <code>@subscribe</code> and filters the flights. Source:
          <code>src/components/flight-board.ts</code>.
        </p>
      </div>
      <app-flight-board></app-flight-board>
    </div>
  `;
}
