import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  // 设置反向，跨域代理
  // axios({
  //     method: 'get',
  //     url: '/api/user/login'
  // })
  // 这个请求就会被发送去http://localhost:8080/api-test/user/login
  server: {
    proxy: {
      "/api": {
        target:
          "https://console-mock.apipost.cn/mock/606ced6c-93cf-47e6-a53c-6aa243b4ad0e",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api-test"),
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  base: "./", //相对路径
})
