import { useMemo } from "react";
import { ContainerProvider as AgvanProvider } from "@codeandmoney/agvan";
import { asClass, asValue, createContainer } from "awilix";
import * as v from "valibot";

import { LocalStore } from "@brand-map/platform/store";

import { Cradle } from "@brand-map/types/container";

import { PropsSchema } from "./container.validation";

export function ContainerProvider({ children, ...providedProps }: React.PropsWithChildren & PropsSchema) {
  const props = v.parse(PropsSchema, providedProps);

  const container = useMemo(() => createContainer<Cradle>({ injectionMode: "PROXY" }), Object.values(props));

  container.register("example", asValue("example"));

  container.register("userRole", asValue(props.userRole));

  container.register("localStore", asClass(LocalStore));

  return <AgvanProvider container={container}>{children}</AgvanProvider>;
}
