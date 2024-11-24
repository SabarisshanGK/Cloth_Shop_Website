import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@components':path.resolve(__dirname,"src/components"),
      '@UI':path.resolve(__dirname,"src/components/UI"),
      "@layouts": path.resolve(__dirname,"src/layouts"),
      "@assets": path.resolve(__dirname,"src/assets"),
      "@utils": path.resolve(__dirname,"src/utils"),
      "@styles": path.resolve(__dirname,"src/styles"),
      "@Pages": path.resolve(__dirname,"src/pages"),
      "@":path.resolve(__dirname,"src")
    }
  }
})
