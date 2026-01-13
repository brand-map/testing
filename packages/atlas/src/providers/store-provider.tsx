import { createContext, useContext, useMemo } from "react";
import * as v from "valibot";

import { LocalStore } from "@brand-map/platform/store";

import { PropsSchema } from "./container.validation";
import { LocalStoreInterface } from "@brand-map/types/local-store";

const StoreContext = createContext<{ localStore: LocalStoreInterface } | null>(null);

export function useStore(): { localStore: LocalStoreInterface } {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("`useStore` must be used within `StoreProvider`");
  }
  return context;
}

export function StoreProvider({ children, ...providedProps }: React.PropsWithChildren & PropsSchema) {
  const { userRole } = v.parse(PropsSchema, providedProps);

  const localStore = useMemo(() => new LocalStore({ userRole }), [userRole]);

  return <StoreContext.Provider value={{ localStore }}>{children}</StoreContext.Provider>;
}
