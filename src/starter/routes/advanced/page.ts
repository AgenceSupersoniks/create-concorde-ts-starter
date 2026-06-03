import {html} from "lit";
import {starterCard} from "../../components/starter-card";

export default function AdvancedIndexPage() {
  return starterCard(
    "Advanced patterns",
    html`<p class="text-sm text-neutral-600">Dynamic DataProviderKey</p>`,
    {path: "src/starter/routes/advanced/page.ts"},
  );
}
