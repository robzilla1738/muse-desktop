import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
export default defineConfig({
  root: fileURLToPath(new URL('./source/renderer/', import.meta.url)),
  publicDir: false,
  plugins: [react()],
  define: { __MUSE_STANDALONE__: 'false', 'process.env.NODE_ENV': '"production"', 'process.env': '{}', 'process.platform': '"browser"', 'process.version': '""' },
  build: {
    outDir: fileURLToPath(new URL('./views/muse/app/', import.meta.url)),
    emptyOutDir: false,
    minify: true,
    lib: { entry: fileURLToPath(new URL('./source/renderer/src/main.tsx', import.meta.url)), formats: ['es'], fileName: () => 'muse-app.mjs' },
    rollupOptions: { output: { assetFileNames: 'assets/[name][extname]' } }
  }
})
