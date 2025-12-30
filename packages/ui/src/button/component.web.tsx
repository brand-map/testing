import * as stylex from "@stylexjs/stylex";

import type { Props } from "./types";

const styles = stylex.create({
  button: {
    backgroundColor: "green",
    height: 300,
    width: 300,
  },
});

export function Button({ title, onPress }: Props) {
  return (
    <button {...stylex.props(styles.button)} onClick={onPress}>
      {title}
    </button>
  );
}
