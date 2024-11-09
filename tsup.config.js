import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  splitting: true,
  sourcemap: true,
  minify: true,
  clean: true,
  skipNodeModulesBundle: true,
  dts: true,
  external: ["node_modules", "example"],
});
