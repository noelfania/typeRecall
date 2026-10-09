import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

// GitHub Pages: https://noelfania.github.io/typeRecall/
const pagesBase = "/typeRecall/";

export default defineConfig(({ command, isPreview }) => ({
  // 로컬 dev만 루트. 빌드·preview는 Pages 하위 경로
  base: command === "serve" && !isPreview ? "/" : pagesBase,
  plugins: [solid()],
  server: {
    // Windows Hyper-V 등으로 5173이 예약된 경우가 있어 4000 사용
    port: 4000,
    strictPort: true,
    host: "127.0.0.1",
  },
  preview: {
    port: 4000,
    strictPort: true,
    host: "127.0.0.1",
  },
}));
