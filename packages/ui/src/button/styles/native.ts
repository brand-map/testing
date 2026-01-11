import { makeUseStyles } from "@codeandmoney/react-native-stylex";

export const useStyles = makeUseStyles({
  styles: () => ({
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
  }),
});
