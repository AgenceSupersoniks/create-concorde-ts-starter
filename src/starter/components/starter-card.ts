import {html} from "lit";
import type {DirectiveResult} from "lit/directive.js";
import "@supersoniks/concorde/card";
import "@supersoniks/concorde/card-header";
import {sourceLinks, type StarterSource} from "./editor-link";

/** Documented card pattern: sonic-card + sonic-card-header */
export function starterCard(
  title: string,
  body: DirectiveResult,
  source?: StarterSource | StarterSource[],
) {
  const sources = source
    ? Array.isArray(source)
      ? source
      : [source]
    : [];

  return html`
    <sonic-card type="base">
      <sonic-card-header label=${title}></sonic-card-header>
      ${sourceLinks(sources)}
      ${body}
    </sonic-card>
  `;
}
