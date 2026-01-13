import { LocalStoreInterface } from "./local-store/exports";

export interface Cradle {
  localStore: LocalStoreInterface;
  userRole: "curator" | "shopper";
}
