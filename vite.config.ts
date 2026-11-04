import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'github-upload' ? './' : '/',
  plugins: [react()],
  build: mode === 'github-upload' ? {} : {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (/\/node_modules\/(recharts|d3-[^/]+|victory-vendor)\//.test(id)) {
            return 'charts'
          }
        },
      },
    },
  },
}))
