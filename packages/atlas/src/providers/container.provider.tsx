// import { createContext, useContext, useMemo } from "react";
// import { ContainerProvider as AgvanProvider } from "@codeandmoney/agvan";
// import { asClass, asValue, createContainer } from "awilix";
// import * as v from "valibot";

// // import { LocalStore } from "@brand-map/platform/store";

// import { Cradle } from "@brand-map/types/container";

// import { PropsSchema } from "./container.validation";

// const ContainerContext = createContext<Cradle | null>(null);

// export function useContainer() {
//   const context = useContext(ContainerContext);
//   if (!context) {
//     throw new Error("`useContainer` must be used within `ContainerProvider`");
//   }
// }

// export function ContainerProvider({ children, ...providedProps }: React.PropsWithChildren & PropsSchema) {
//   const props = v.parse(PropsSchema, providedProps);

//   return <AgvanProvider container={container}>{children}</AgvanProvider>;
// }
