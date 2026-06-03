import {initConceptDataProviders} from "./concepts/init";
import {initDemoApi} from "./demo/init";
import {initAdvancedDataProviders} from "./advanced/init";

/** Starter kit init (concepts + mock demo). */
export function initStarterKit(): void {
  initConceptDataProviders();
  initDemoApi();
  initAdvancedDataProviders();
}
