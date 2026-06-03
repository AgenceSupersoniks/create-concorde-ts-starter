import type {APIConfiguration} from "@supersoniks/concorde/utils/api";
import {DataProviderKey} from "@supersoniks/concorde/dataProviderKey";
import {set} from "../../../utils/dataprovider";
import {MOCK_API_PATH_PREFIX} from "./router";

export const starterApiConfigKey = new DataProviderKey<APIConfiguration>(
  "starterApiConfiguration",
);

/** URL de base du mock (origin + /mock-api) */
export function getMockApiServiceUrl(origin = location.origin): string {
  return new URL(MOCK_API_PATH_PREFIX, origin).href.replace(/\/$/, "");
}

export const defaultStarterApiConfiguration = (
  origin = location.origin,
): APIConfiguration => ({
  serviceURL: getMockApiServiceUrl(origin),
  token: null,
  userName: null,
  password: null,
  authToken: null,
  tokenProvider: null,
  credentials: "same-origin",
});

export function initStarterApiConfiguration(origin = location.origin): void {
  set(starterApiConfigKey.path, defaultStarterApiConfiguration(origin));
}
