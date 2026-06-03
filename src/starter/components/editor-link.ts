import {html, nothing} from "lit";

declare const __STARTER_EDITOR_AVAILABLE__: boolean;

export type StarterSource = {
  path: string;
  line?: number;
  column?: number;
  label?: string;
};

const editorAvailable =
  import.meta.env.DEV &&
  typeof __STARTER_EDITOR_AVAILABLE__ !== "undefined" &&
  __STARTER_EDITOR_AVAILABLE__;

function openStarterSource(source: StarterSource, event: Event) {
  event.preventDefault();
  if (!editorAvailable) return;

  const params = new URLSearchParams({
    path: source.path,
    line: String(source.line ?? 1),
    column: String(source.column ?? 1),
  });

  void fetch(`/__starter/open?${params}`).catch(() => {
    console.warn("Could not open in editor:", source.path);
  });
}

export function sourceLink(source: StarterSource) {
  if (!editorAvailable) return nothing;
  const label = source.label ?? source.path.split("/").pop() ?? "source";
  return html`<a
    href="#"
    class="underline text-neutral-500 hover:text-neutral-800 cursor-pointer"
    title=${source.path}
    @click=${(e: Event) => openStarterSource(source, e)}
    >↗ ${label}</a
  >`;
}

export function sourceLinks(sources: StarterSource[]) {
  if (!editorAvailable || sources.length === 0) return nothing;
  return html`
    <p class="text-xs mb-3 flex flex-wrap gap-x-3 gap-y-1">
      ${sources.map((s) => sourceLink(s))}
    </p>
  `;
}
