import type { Props } from "./types.ts";

export function View(props: Props) {
  return <div>{props.children}</div>;
}
