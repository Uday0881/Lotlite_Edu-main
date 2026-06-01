import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      // Direct POSTs for leads go to Google Apps Script webhook for quick dev testing.
      // This avoids CORS issues when the Spring backend is not running locally.
      '/api/leads': {
        target: 'https://script.google.com/macros/s/AKfycbxKjfg78cxZeQIvy50_Z9xlgtbfQXKbg6jm0GI73nTeeGTw3LrbC3bzo0qjjZtY3ufG/exec',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/leads/, '')
      },
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
