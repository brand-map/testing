import * as stylex from "@stylexjs/stylex";

import { styles } from "./styles/web";
import type { Button as ButtonComponent } from "./types";

export const Button: typeof ButtonComponent = ({ title, onPress }) => {
  return (
    <button {...stylex.props(styles.button)} onClick={onPress}>
      {title}
    </button>
  );
};
