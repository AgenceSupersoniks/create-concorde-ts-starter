import {html} from "lit";
import {sub} from "@supersoniks/concorde/directives";
import "@supersoniks/concorde/input";
import {conceptFormKey} from "../../../concepts/dp";
import {starterCard} from "../../../components/starter-card";

export default function ConceptSubPage() {
  return starterCard(
    "sub()",
    html`<div class="space-y-4">
      <p class="text-sm text-neutral-600">Read store in template.</p>
      <div formDataProvider=${conceptFormKey.path} class="max-w-md">
        <sonic-input name="value" label="Your text"></sonic-input>
      </div>
      <p class="text-lg"><strong>${sub(`${conceptFormKey.path}.value`)}</strong></p>
    </div>`,
    {path: "src/starter/routes/concepts/sub/page.ts"},
  );
}
