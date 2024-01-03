import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'
import pkjJSON from './package.json'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: 'index'
    },
    emptyOutDir: true,
    rollupOptions: {
      external: Object.keys(pkjJSON.peerDependencies)
    }
  },
  css: {
    modules: {}
  },
  plugins: [react(), dts()]
})
