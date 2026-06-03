import {html} from "lit";
import "@supersoniks/concorde/input";
import {scopeCallout} from "../../../components/scope-callout";
import {conceptFormKey} from "../../../concepts/dp";
import "../../../concepts/components/form-subscribe";
import {starterCard} from "../../../components/starter-card";

export default function ConceptFormPage() {
  return starterCard(
    "formDataProvider",
    html`<div class="space-y-4">
      ${scopeCallout("form")}
      <p class="text-sm text-neutral-600">
        Container attribute → fields publish via <code>name</code>.
      </p>
      <div formDataProvider=${conceptFormKey.path} class="max-w-md">
        <sonic-input name="value" label="Your text"></sonic-input>
      </div>
      <concept-form-subscribe></concept-form-subscribe>
    </div>`,
    [
      {path: "src/starter/routes/concepts/form/page.ts"},
      {path: "src/starter/concepts/components/form-subscribe.ts", label: "form-subscribe"},
    ],
  );
}
