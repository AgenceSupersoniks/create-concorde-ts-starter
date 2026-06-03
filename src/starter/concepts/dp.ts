import {DataProviderKey} from "@supersoniks/concorde/dataProviderKey";

/** Compteur @publish / @subscribe / @handle */
export type CounterData = {
  count: number;
};

export const counterKey = new DataProviderKey<CounterData>("starterConceptCounter");

/** Champ unique pour la démo formDataProvider */
export type ConceptFormData = {
  value: string;
};

export const conceptFormKey = new DataProviderKey<ConceptFormData>(
  "starterConceptForm",
);
