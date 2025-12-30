import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LocalStore } from "@brand-map/atlas/views/store";

export const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
});

export default function Index() {
  return (
    <SafeAreaView>
      <LocalStore />
    </SafeAreaView>
  );
}
