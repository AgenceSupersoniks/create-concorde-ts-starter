import {set} from "../../utils/dataprovider";
import {initStarterApiConfiguration} from "./api/config";
import {registerDemoApiServiceWorker} from "./api/register";
import {demoUsersFilterKey} from "./dp";

export function initDemoApi(): void {
  initStarterApiConfiguration();
  set(demoUsersFilterKey.path, {q: ""});
  void registerDemoApiServiceWorker();
}
