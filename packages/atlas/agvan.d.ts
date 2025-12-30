declare module "@codeandmoney/agvan/hooks" {
  import type { LocalStoreInterface } from "@brand-map/types/local-store";

  export interface Cradle {
    example: "example";
    localStore: LocalStoreInterface;
    userRole: "curator" | "shopper";
  }
}
