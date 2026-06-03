import {html} from "lit";
import "@supersoniks/concorde/menu";
import "@supersoniks/concorde/divider";

export type SidebarLink = {href: string; label: string};

export type SidebarSection = {
  title: string;
  links: SidebarLink[];
};

export const CONCEPTS_SECTION: SidebarSection = {
  title: "Concepts",
  links: [
    {href: "/concepts/dataprovider", label: "DataProvider"},
    {href: "/concepts/dpkey", label: "DataProviderKey"},
    {href: "/concepts/endpoint", label: "Endpoint"},
    {href: "/concepts/publish", label: "@publish + @subscribe"},
    {href: "/concepts/handle", label: "@handle"},
    {href: "/concepts/form", label: "formDataProvider"},
    {href: "/concepts/sub", label: "sub()"},
  ],
};

export const DEMO_SECTION: SidebarSection = {
  title: "Utilisations classiques",
  links: [
    {href: "/demo/get", label: "@get"},
    {href: "/demo/list", label: "sonic-list"},
    {href: "/demo/queue", label: "sonic-queue"},
  ],
};

export const ADVANCED_SECTION: SidebarSection = {
  title: "Utilisations avancées",
  links: [
    {href: "/advanced/dynamic", label: "DataProviderKey dynamique"},
  ],
};

const navItem = (href: string, label: string) => html`
  <sonic-menu-item pushstate href=${href} autoActive="strict">
    ${label}
  </sonic-menu-item>
`;

const sectionDivider = (title: string) => html`
  <sonic-divider label=${title} align="left" size="sm"></sonic-divider>
`;

export function renderStarterSidebar(sections: SidebarSection[]) {
  return html`
    <nav aria-label="Navigation latérale">
      <sonic-menu direction="column" align="left" size="sm" class="w-full">
        ${navItem("/", "Accueil")}
        ${sections.flatMap((section) => [
          sectionDivider(section.title),
          ...section.links.map((link) => navItem(link.href, link.label)),
        ])}
      </sonic-menu>
    </nav>
  `;
}

export function renderDocsShell(
  sections: SidebarSection[],
  children: unknown,
) {
  return html`
    <div class="max-w-6xl mx-auto px-4 py-8">
      <div class="flex gap-10 items-start">
        <aside
          class="w-52 shrink-0 sticky top-8 self-start hidden sm:block"
          aria-label="Sommaire"
        >
          ${renderStarterSidebar(sections)}
        </aside>
        <div class="flex-1 min-w-0">
          <header class="mb-8 sm:hidden">
            ${renderStarterSidebar(sections)}
          </header>
          <main>${children}</main>
        </div>
      </div>
    </div>
  `;
}
