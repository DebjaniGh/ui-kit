import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: "tsconfig.app.json",
      exclude: ["src/App.tsx", "src/main.tsx"],
    }),
  ],
  publicDir: false, // ells Vite not to copy the public/ folder at all during the library build
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "react-router-dom"], // external peer dependencies to be supplied by the host application.
      // An explicit array, one entry per format: with a single shared output
      // object, Vite still writes both the "es" and "cjs" passes into dist/
      // using the same entryFileNames pattern, so the second pass silently
      // overwrites the first (dist/index.cjs ends up missing entirely).
      // Keeping formats distinct here is what keeps preserveModules safe
      // for dual-format output.
      output: [
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].js",
        },
        {
          format: "cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].cjs",
          exports: "named",
        },
      ],
    },
  },
});
