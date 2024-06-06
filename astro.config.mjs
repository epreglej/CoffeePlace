import { defineConfig } from "astro/config";
import bun from "astro-bun-adapter";

export default defineConfig({
  output: "server",
  adapter: bun(),
});
