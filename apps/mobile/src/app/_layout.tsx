import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { QueryClientProvider } from "@tanstack/react-query";

import { AtlasProviders } from "@brand-map/atlas/atlas-providers";

import { queryClient } from "~/utils/api";

// This is the main layout of the app
// It wraps your pages with the providers they need
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AtlasProviders config={{ platform: "native", userRole: "curator" }}>
        {/*
          The Stack component displays the current page.
          It also allows you to configure your screens
        */}
        <Stack />
      </AtlasProviders>
      <StatusBar />
    </QueryClientProvider>
  );
}
