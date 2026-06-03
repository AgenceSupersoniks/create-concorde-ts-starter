import type {DirectiveResult} from "lit/directive.js";
import {renderDocsShell} from "../../components/docs-shell";

export default (children: DirectiveResult, _params?: Record<string, string>) =>
  renderDocsShell(children);
