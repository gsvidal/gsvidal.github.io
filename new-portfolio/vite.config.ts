import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/new/',
  plugins: [react()],
  build: {
    outDir: '../new',
    emptyOutDir: true,
  },
})
