import {html, LitElement} from "lit";
import {customElement, property, state} from "lit/decorators.js";
import "@supersoniks/concorde/button";
import {handle, subscribe} from "@supersoniks/concorde/decorators";
import {advancedUserKey, type AdvancedUser} from "../dp";
import tailwind from "../../../tailwind";

@customElement("advanced-dpkey-dynamic-demo")
export class AdvancedDpkeyDynamicDemo extends LitElement {
  static styles = [tailwind];

  @property({type: Number})
  userIndex = 0;

  @subscribe(advancedUserKey)
  @state()
  user: AdvancedUser | null = null;

  @state()
  handleMessage = "";

  @handle(advancedUserKey)
  onUserAssigned(user: AdvancedUser) {
    this.handleMessage = `${user.firstName} ${user.lastName} — ${new Date().toLocaleTimeString()}`;
  }

  private selectIndex(index: number) {
    this.userIndex = index;
  }

  render() {
    const resolvedPath = `starterAdvancedUsers.${this.userIndex}`;

    return html`
      <div class="space-y-6 max-w-lg">
        <div class="flex flex-wrap gap-2">
          ${[0, 1, 2].map(
            (index) => html`
              <sonic-button
                type="button"
                variant=${this.userIndex === index ? "primary" : "default"}
                @click=${() => this.selectIndex(index)}
              >
                Index ${index}
              </sonic-button>
            `,
          )}
        </div>

        <dl class="text-sm font-mono space-y-1 bg-neutral-100/80 rounded p-3">
          <div>
            <dt class="text-neutral-500">userIndex (hôte)</dt>
            <dd>${this.userIndex}</dd>
          </div>
          <div>
            <dt class="text-neutral-500">Chemin résolu</dt>
            <dd>${resolvedPath}</dd>
          </div>
          <div>
            <dt class="text-neutral-500">Clé statique (template)</dt>
            <dd>${advancedUserKey.path}</dd>
          </div>
        </dl>

        <div class="space-y-2">
          <h4 class="text-sm font-semibold">@subscribe(advancedUserKey)</h4>
          ${this.user
            ? html`
                <div class="p-3 border border-neutral-200 rounded-md text-sm">
                  <div class="font-medium">
                    ${this.user.firstName} ${this.user.lastName}
                  </div>
                  <div class="text-neutral-500">${this.user.email}</div>
                </div>
              `
            : html`
                <p class="text-sm text-neutral-500 italic">
                  Aucune donnée à l’index ${this.userIndex}
                </p>
              `}
        </div>

        <div class="space-y-2">
          <h4 class="text-sm font-semibold">@handle(advancedUserKey)</h4>
          <p class="text-sm text-neutral-600">
            ${this.handleMessage ||
            "En attente d’une assignation sur le chemin courant…"}
          </p>
        </div>
      </div>
    `;
  }
}
