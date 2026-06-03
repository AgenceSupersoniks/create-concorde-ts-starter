import {html} from "lit";
import {advancedUserKey} from "../../../advanced/dp";
import "../../../advanced/components/dpkey-dynamic-demo";
import {starterCard} from "../../../components/starter-card";

export default function AdvancedDynamicDpkeyPage() {
  return starterCard(
    "Dynamic DataProviderKey",
    html`<div class="space-y-4">
      <p class="text-sm text-neutral-600">
        Placeholder in path · re-subscribes on change.
      </p>
      <advanced-dpkey-dynamic-demo></advanced-dpkey-dynamic-demo>
      <p class="text-xs font-mono text-neutral-500">${advancedUserKey.path}</p>
    </div>`,
    [
      {path: "src/starter/routes/advanced/dynamic/page.ts"},
      {path: "src/starter/advanced/components/dpkey-dynamic-demo.ts", label: "dynamic-demo"},
      {path: "src/starter/advanced/dp.ts", label: "dp.ts"},
    ],
  );
}
