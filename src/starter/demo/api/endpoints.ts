import {Endpoint} from "@supersoniks/concorde/utils/endpoint";
import type {
  GeoCommuneRow,
  ReqresUsersListResponse,
} from "./types";

/** GET users?offset=…&limit=… — sonic-queue infinite scroll */
export const starterUsersQueueEndpoint = new Endpoint<ReqresUsersListResponse>(
  "users?offset=$offset&limit=$limit",
);

/** GET communes?limit=… — array (@get) */
export const starterCommunesEndpoint = new Endpoint<GeoCommuneRow[]>(
  "communes?limit=5&fields=nom,code",
);
