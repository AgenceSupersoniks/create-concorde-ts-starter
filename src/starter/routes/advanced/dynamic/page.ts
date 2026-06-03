import {html} from "lit";
import {advancedUserKey} from "../../../advanced/dp";
import "../../../advanced/components/dpkey-dynamic-demo";

export default function AdvancedDynamicDpkeyPage() {
  return html`
    <section class="space-y-6">
      <div class="space-y-4">
        <h2 class="text-2xl font-bold">DataProviderKey — placeholder dynamique</h2>
        <p class="text-neutral-600 text-sm leading-relaxed">
          Le constructeur de <code>DataProviderKey</code> accepte des
          placeholders <code>${"${userIndex}"}</code> (chaîne normale, pas de
          backticks). Les décorateurs (<code>@subscribe</code>,
          <code>@handle</code>, <code>@publish</code>) résolvent le chemin à
          partir des propriétés du composant hôte et se ré-abonnent quand elles
          changent.
        </p>
        <p class="text-neutral-600 text-sm leading-relaxed">
          Le second paramèbre générique
          (<code>DataProviderKey&lt;T, U&gt;</code>) documente les dépendances
          hôte attendues — ici <code>userIndex: number</code>.
        </p>
      </div>

      <pre
        class="text-xs font-mono bg-neutral-100/90 rounded p-4 overflow-x-auto whitespace-pre-wrap"
      ><code>// src/starter/advanced/dp.ts
export const advancedUserKey = new DataProviderKey&lt;
  AdvancedUser,
  { userIndex: number }
&gt;("${advancedUserKey.path}");

// composant
@property({ type: Number }) userIndex = 0;

@subscribe(advancedUserKey)
@state() user: AdvancedUser | null = null;

@handle(advancedUserKey)
onUserAssigned(user: AdvancedUser) { … }</code></pre>

      <advanced-dpkey-dynamic-demo></advanced-dpkey-dynamic-demo>

      <p class="text-xs text-neutral-500">
        Données initiales dans <code>src/starter/advanced/init.ts</code> —
        tableau <code>starterAdvancedUsers</code> indexé par
        <code>userIndex</code>.
      </p>
    </section>
  `;
}
