import {html} from "lit";
import "@supersoniks/concorde/menu";
import "@supersoniks/concorde/divider";

export type SidebarLink = {href: string; label: string};

export type SidebarSection = {
  title: string;
  links: SidebarLink[];
};

export const CONCEPTS_SECTION: SidebarSection = {
  title: "Data concepts",
  links: [
    {href: "/concepts/dataprovider", label: "DataProvider"},
    {href: "/concepts/scope", label: "Scope"},
    {href: "/concepts/dpkey", label: "DataProviderKey"},
    {href: "/concepts/endpoint", label: "Endpoint"},
    {href: "/concepts/publish", label: "@publish + @subscribe"},
    {href: "/concepts/handle", label: "@handle"},
    {href: "/concepts/form", label: "formDataProvider"},
    {href: "/concepts/sub", label: "sub()"},
  ],
};

export const UI_SECTION: SidebarSection = {
  title: "UI kit",
  links: [{href: "/ui", label: "Overview"}],
};

export const DEMO_SECTION: SidebarSection = {
  title: "Functional patterns",
  links: [
    {href: "/demo/get", label: "@get"},
    {href: "/demo/list", label: "sonic-list"},
    {href: "/demo/queue", label: "sonic-queue"},
  ],
};

export const ADVANCED_SECTION: SidebarSection = {
  title: "Advanced patterns",
  links: [
    {href: "/advanced/dynamic", label: "Dynamic DataProviderKey"},
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
    <nav aria-label="Side navigation">
      <sonic-menu direction="column" align="left" size="sm" class="w-full">
        ${navItem("/", "Home")}
        ${sections.flatMap((section) => [
          sectionDivider(section.title),
          ...section.links.map((link) => navItem(link.href, link.label)),
        ])}
      </sonic-menu>
    </nav>
  `;
}
