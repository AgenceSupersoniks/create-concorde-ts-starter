import {DataProviderKey} from "@supersoniks/concorde/dataProviderKey";

export const ADVANCED_USERS_PATH = "starterAdvancedUsers";

export type AdvancedUser = {
  firstName: string;
  lastName: string;
  email: string;
};

/** Dépendances hôte pour résoudre `${userIndex}` dans le chemin. */
export type AdvancedUserHost = {userIndex: number};

/**
 * Chemin dynamique : `starterAdvancedUsers.0`, `starterAdvancedUsers.1`, …
 * selon la propriété `userIndex` du composant hôte.
 */
export const advancedUserKey = new DataProviderKey<
  AdvancedUser,
  AdvancedUserHost
>("starterAdvancedUsers.${userIndex}");
