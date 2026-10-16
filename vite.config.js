import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    proxy: {
      "/api/countries": {
        target: "https://restcountries.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/countries/, "/v3.1"),
      },
      "/api/weather": {
        target: "https://api.open-meteo.com",
        changeOrigin: true,
        secure: true,
        timeout: 10000,
        proxyTimeout: 10000,
        rewrite: (path) => path.replace(/^\/api\/weather/, "/v1/forecast"),
      },
    },
  },

  test: {
    environment: "jsdom",
  },
});
