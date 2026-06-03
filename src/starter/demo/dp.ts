import {DataProviderKey} from "@supersoniks/concorde/dataProviderKey";

/** sonic-queue filter — single search field (first name, last name, email). */
export type DemoUsersFilter = {
  q: string;
};

export const demoUsersFilterKey = new DataProviderKey<DemoUsersFilter>(
  "demoUsersFilter",
);
