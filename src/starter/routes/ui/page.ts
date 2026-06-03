import {html} from "lit";
import {starterCard} from "../../components/starter-card";
import "../../ui/components/ui-kit-demo";

export default function UiKitPage() {
  return starterCard(
    "UI kit",
    html`<starter-ui-kit-demo></starter-ui-kit-demo>`,
    {path: "src/starter/ui/components/ui-kit-demo.ts", label: "ui-kit-demo"},
  );
}
