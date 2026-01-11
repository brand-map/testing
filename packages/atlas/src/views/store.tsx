import { useCallback, useState } from "react";
import { useCradle } from "@codeandmoney/agvan";
import {LocalStoreInterface } from "@brand-map/types/local-store"
import { Cradle } from "@brand-map/types/container"

import { Button } from "@brand-map/ui/button";
import { Typo } from "@brand-map/ui/typo";
import { View } from "@brand-map/ui/view";

export function LocalStore() {
  const [state, setState] = useState("Default Value");
  // const { localStore } = useCradle() as Cradle


  // const saveToStorage = useCallback(async () => {
  //   await localStore.set("key", `value: ${Math.random()}`);
  // }, []);

  // const getFromStorage = useCallback(async () => {
  //   const result = await localStore.get<string>("key");
  //   if (result.isOk() && result.value) {
  //     setState(result.value);
  //   }
  // },[])

  // const removeFormStorage = () => {
  //   const res = localStore.remove("key");
  //   console.log("res===>", res);
  // };

  return (
    <View>
      {/* <Button title={"Save Rendom"} onPress={saveToStorage} />
      <Button title={"Get"} onPress={getFromStorage} />
      <Button title={"Remove "} onPress={removeFormStorage} /> */}

      <Typo>{state}</Typo>
    </View>
  );
}
