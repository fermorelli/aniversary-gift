import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative bundles also work when published under /nombre-del-repositorio/.
  base: "./",
});
