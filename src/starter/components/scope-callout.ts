import {html} from "lit";

type ScopeTopic = "api" | "form" | "icons";

const hints: Record<ScopeTopic, string> = {
  api: "Inherited `serviceURL`.",
  form: "Inherited `formDataProvider`.",
  icons: "Inherited icon path.",
};

export function scopeCallout(topic: ScopeTopic) {
  return html`
    <p class="text-xs text-neutral-500 border-l-2 border-primary/30 pl-3">
      Scope: ${hints[topic]}
      <a href="/concepts/scope" class="underline ml-1">→</a>
    </p>
  `;
}
