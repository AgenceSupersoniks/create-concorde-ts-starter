import {html} from "lit";
import {starterCard} from "../../components/starter-card";

export default function DemoIndexPage() {
  return starterCard(
    "Functional patterns",
    html`<p class="text-sm text-neutral-600">@get · sonic-list · sonic-queue</p>`,
    {path: "src/starter/routes/demo/page.ts"},
  );
}
