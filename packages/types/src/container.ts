import { LocalStoreInterface } from "./local-store/exports";

export interface Cradle {
  example: "example";
  localStore: LocalStoreInterface;
  userRole: "curator" | "shopper";
}
