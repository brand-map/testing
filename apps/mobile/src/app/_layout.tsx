import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { QueryClientProvider } from "@tanstack/react-query";

import { AtlasProviders } from "@brand-map/atlas/atlas-providers";

import { queryClient } from "~/utils/api";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AtlasProviders config={{ platform: "native", userRole: "curator" }}>
        <Stack />
      </AtlasProviders>
      <StatusBar />
    </QueryClientProvider>
  );
}
