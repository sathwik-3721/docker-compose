import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_BACKEND_URL || "http://localhost:5050", // Uses env variable if available
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove "/api" from request
      },
    },
  },
});
