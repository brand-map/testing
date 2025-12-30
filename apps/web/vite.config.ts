import stylex from "@stylexjs/unplugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  server: {
    port: 4000,
  },
  resolve: {
    extensions: [".web.tsx", ".web.ts", ".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json", ".mjs", ".cjs"],
  },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    nitro({}),
    tanstackStart({}),

    // @ts-ignore: this shit just can't produce stable types
    stylex.vite({
      // StyleX configuration options
      useCSSLayers: true,

      // TODO: enable compiler. Not runtime styles injection
      // runtimeInjection: true,
      lightningcssOptions: {
        // Options for lightningcss which postprocesses the generated CSS
      },
    }),
    viteReact(),
  ],
});

export default config;
