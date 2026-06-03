import {Endpoint} from "@supersoniks/concorde/utils/endpoint";
import type {
  GeoCommuneRow,
  ReqresUsersListResponse,
} from "./types";

/** GET users?offset=…&limit=… — scroll infini sonic-queue */
export const starterUsersQueueEndpoint = new Endpoint<ReqresUsersListResponse>(
  "users?offset=$offset&limit=$limit",
);

/** GET communes?limit=… — tableau (@get) */
export const starterCommunesEndpoint = new Endpoint<GeoCommuneRow[]>(
  "communes?limit=5&fields=nom,code",
);
