import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // Increase this value to suit your project size
  },
  optimizeDeps: {
    include: ["react-to-print"],
  },
});
