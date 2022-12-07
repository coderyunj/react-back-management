import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
// import vitePluginImp from 'vite-plugin-imp'
// import styleImport, {AntdResolve} from 'vite-plugin-style-import' // 配置按需引入样式文件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
