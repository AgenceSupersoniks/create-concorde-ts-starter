import {DataProviderKey} from "@supersoniks/concorde/dataProviderKey";

/** Counter for @publish / @subscribe / @handle */
export type CounterData = {
  count: number;
};

export const counterKey = new DataProviderKey<CounterData>("starterConceptCounter");

/** Single field for the formDataProvider demo */
export type ConceptFormData = {
  value: string;
};

export const conceptFormKey = new DataProviderKey<ConceptFormData>(
  "starterConceptForm",
);
