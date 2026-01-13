import { useCallback, useState } from "react";

import { Button } from "@brand-map/ui/button";
import { Typo } from "@brand-map/ui/typo";
import { View } from "@brand-map/ui/view";
import { useStore } from "../providers/store-provider";

export function LocalStore() {
  const [state, setState] = useState("Default Value");
  const { localStore } = useStore();

  const saveToStorage = useCallback(async () => {
    await localStore.set("key", `value: ${Math.random()}`);
  }, []);

  const getFromStorage = useCallback(async () => {
    const result = await localStore.get<string>("key");
    if (result.isOk() && result.value) {
      setState(result.value);
    }
  }, []);

  const removeFormStorage = () => {
    const res = localStore.remove("key");
    console.log("res===>", res);
  };

  return (
    <View>
      <Button title={"Save Random Number"} onPress={saveToStorage} />
      <Button title={"Get"} onPress={getFromStorage} />
      <Button title={"Remove "} onPress={removeFormStorage} />

      <Typo>{state}</Typo>
    </View>
  );
}
