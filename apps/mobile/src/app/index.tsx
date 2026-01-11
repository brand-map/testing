import { SafeAreaView } from "react-native-safe-area-context";

import { LocalStore } from "@brand-map/atlas/views/store";

export default function Index() {
  return (
    <SafeAreaView>
      <LocalStore />
    </SafeAreaView>
  );
}
