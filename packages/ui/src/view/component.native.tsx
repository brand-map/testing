import { Text } from "react-native";

import type { Props } from "./types.ts";

export function View(props: Props) {
  return <Text>{props.children}</Text>;
}
