import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/components/output/web-component.tsx",
      fileName: () => "chat-widget.iife.js",
      formats: ["iife"],
      name: "ChatWidget",
    },
    outDir: "dist/iife",
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        format: "iife",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        name: "ChatWidget",
      },
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  plugins: [react()],
});
