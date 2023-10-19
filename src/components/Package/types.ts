import { PackageInput } from "@dashboard/graphql";

export enum EventDataAction {
  add = "add",
  delete = "delete",
  update = "update",
}
export enum EventDataField {
  name = "name",
  value = "value",
}
export interface EventData {
  action: EventDataAction;
  field: EventDataField | null;
  fieldIndex: number | null;
  value: string;
}
export interface PackageFormData {
  package: PackageInput[];
}

export type PackageIdSchema = Record<
  string,
  {
    package: PackageInput[];
  }
>;
