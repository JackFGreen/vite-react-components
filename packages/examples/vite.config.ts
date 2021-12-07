import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import eslint from '../../plugin/vite-plugin-eslint'

export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: ['src/**/*.ts', 'src/**/*.tsx']
    })
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 8888
  }
})
