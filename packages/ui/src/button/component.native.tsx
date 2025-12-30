import { Pressable, Text } from "react-native";
import { makeUseStyles } from "@codeandmoney/soelma";

import type { Props } from "./types";

export const useStyles = makeUseStyles(() => ({
  button: {
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "CormorantGaramond-Regular",
  },
}));

export function Button({ title, onPress }: Props) {
  const styles = useStyles();

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
