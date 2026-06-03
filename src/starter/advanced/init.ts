import {set} from "../../utils/dataprovider";
import {ADVANCED_USERS_PATH, type AdvancedUser} from "./dp";

const USERS: AdvancedUser[] = [
  {
    firstName: "Alice",
    lastName: "Martin",
    email: "alice@example.com",
  },
  {
    firstName: "Bob",
    lastName: "Durand",
    email: "bob@example.com",
  },
  {
    firstName: "Claire",
    lastName: "Bernard",
    email: "claire@example.com",
  },
];

export function initAdvancedDataProviders(): void {
  set(ADVANCED_USERS_PATH, USERS);
}
