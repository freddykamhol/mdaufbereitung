import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { copyFileSync } from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    {
      name: 'github-pages-spa-fallback',
      closeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html')
      },
    },
  ],
})
