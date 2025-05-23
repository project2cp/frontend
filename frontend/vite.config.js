import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// Directly define your API base URL here
const API_BASE_URL = 'http://localhost:8000'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.webp'],
  define: {
    'import.meta.env.API_BASE_URL': JSON.stringify(API_BASE_URL)
  },
  server: {
    port: 3002,
    proxy: {
      '/api': {
        target: API_BASE_URL,
        changeOrigin: true,
        secure: false,
      }
    }
  }
})