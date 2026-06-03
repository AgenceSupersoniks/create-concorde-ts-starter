import {set} from "../../utils/dataprovider";
import {conceptFormKey, counterKey} from "./dp";

export function initConceptDataProviders(): void {
  set(counterKey.path, {count: 0});
  set(conceptFormKey.path, {value: ""});
}
