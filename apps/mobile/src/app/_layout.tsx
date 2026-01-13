import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "~/utils/api";
import { StoreProvider } from "@brand-map/atlas/store-provider";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider platform="native" userRole="shopper">
        <Stack />
      </StoreProvider>
      <StatusBar />
    </QueryClientProvider>
  );
}
