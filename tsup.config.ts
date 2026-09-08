import { defineConfig } from "tsup";
import cssModulesPlugin from "esbuild-css-modules-plugin";

export default defineConfig({
  entry: ["src/index.ts"],
  // Output both modern ESM and legacy CJS formats
  format: ["esm", "cjs"],
  // Generate .d.ts type declaration files automatically
  dts: true,
  // Clean the output directory ('dist') before every build
  clean: true,
  // Generate sourcemaps so internal devs can debug your components in their browsers
  sourcemap: true,
  // Prevent bundling React or peer dependencies into the output
  external: ["react", "react-dom"],
  esbuildPlugins: [cssModulesPlugin()],
  tsconfig: "tsconfig.app.json",
  esbuildOptions(options) {
    options.outbase = "src";
  },
});
