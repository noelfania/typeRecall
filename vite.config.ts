import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
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
});
