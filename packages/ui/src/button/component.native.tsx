import { Pressable, Text } from "react-native";

import type { Props } from "./types";
import { useStyles } from "./styles/native";
import type { Button as ButtonComponent } from "./types";

export const Button: typeof ButtonComponent = ({ title, onPress }) => {
  const styles = useStyles();

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
