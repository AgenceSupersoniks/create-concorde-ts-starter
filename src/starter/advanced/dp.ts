import {DataProviderKey} from "@supersoniks/concorde/dataProviderKey";

export const ADVANCED_USERS_PATH = "starterAdvancedUsers";

export type AdvancedUser = {
  firstName: string;
  lastName: string;
  email: string;
};

/** Host dependencies to resolve `${userIndex}` in the path. */
export type AdvancedUserHost = {userIndex: number};

/**
 * Dynamic path: `starterAdvancedUsers.0`, `starterAdvancedUsers.1`, …
 * based on the host component's `userIndex` property.
 */
export const advancedUserKey = new DataProviderKey<
  AdvancedUser,
  AdvancedUserHost
>("starterAdvancedUsers.${userIndex}");
