import {html} from "lit";

export default function AdvancedIndexPage() {
  return html`
    <section class="space-y-4">
      <h2 class="text-2xl font-bold">Utilisations avancées</h2>
      <p class="text-neutral-600 text-sm leading-relaxed">
        Patterns au-delà des concepts de base : chemins DataProvider dynamiques,
        clés typées avec dépendances hôte, etc.
      </p>
      <p class="text-sm text-neutral-500">
        Menu : <strong>DataProviderKey dynamique</strong>.
      </p>
    </section>
  `;
}
