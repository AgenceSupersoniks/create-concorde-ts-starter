import {DataProviderKey} from "@supersoniks/concorde/dataProviderKey";

/** Filtre sonic-queue — recherche unique (prénom, nom, email). */
export type DemoUsersFilter = {
  q: string;
};

export const demoUsersFilterKey = new DataProviderKey<DemoUsersFilter>(
  "demoUsersFilter",
);
