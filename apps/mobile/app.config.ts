import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "mobile",
  slug: "mobile",
  scheme: "mobile",
  version: "0.1.0",
  orientation: "portrait",
  icon: "./assets/icon-light.png",
  userInterfaceStyle: "automatic",
  updates: {
    fallbackToCacheTimeout: 0,
  },
  newArchEnabled: true,
  assetBundlePatterns: ["**/*"],
  ios: {
    // TODO: evalueate later: do we need it?
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
    bundleIdentifier: "app.brandmap.shop",
    supportsTablet: true,
    icon: {
      light: "./assets/icon-light.png",
      dark: "./assets/icon-dark.png",
    },
  },
  android: {
    package: "app.brandmap.shop",
    adaptiveIcon: {
      foregroundImage: "./assets/icon-light.png",
      backgroundColor: "#1F104A",
    },
    edgeToEdgeEnabled: true,
  },
  extra: {
    eas: {
      projectId: "6bf4c27a-91a5-45ab-ae06-74a6c7b61df4",
    },
  },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
    reactCanary: true,
    reactCompiler: true,
  },
  plugins: [
    "expo-router",
    "expo-secure-store",
    "expo-web-browser",
    [
      "expo-font",
      {
        fonts: [
          "./assets/fonts/CormorantGaramond-Light.ttf",
          "./assets/fonts/CormorantGaramond-Medium.ttf",
          "./assets/fonts/CormorantGaramond-Regular.ttf",
          "./assets/fonts/CormorantGaramond-Bold.ttf",
          "./assets/fonts/CormorantGaramond-SemiBold.ttf",
        ],
      },
    ],
    [
      "expo-splash-screen",
      {
        backgroundColor: "#E4E4E7",
        image: "./assets/icon-light.png",
        dark: {
          backgroundColor: "#18181B",
          image: "./assets/icon-dark.png",
        },
      },
    ],
  ],
});
