import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404-for-spa',
      closeBundle() {
        const outDir = join(process.cwd(), 'dist')
        const index = join(outDir, 'index.html')
        const fallback = join(outDir, '404.html')
        if (existsSync(index)) {
          copyFileSync(index, fallback)
        }
      },
    },
  ],
  base: process.env.GITHUB_ACTIONS ? '/tiktok-overlay/' : '/',
})
