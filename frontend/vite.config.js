import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  base: '/AbkaraiTaalimSaghir/', // غيّرها إلى '/اسم-المستودع/' فقط إذا كنت تنشر على GitHub Pages
})
