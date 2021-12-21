import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import eslint from '../../plugin/vite-plugin-eslint'

export default ({ mode }) => {
  const cusEnv = loadEnv(mode, process.cwd())
  console.log(cusEnv)

  return defineConfig({
    plugins: [
      react(),
      eslint({
        include: ['src/**/*.ts', 'src/**/*.tsx']
      })
    ],
    resolve: {
      conditions: ['VITE_DEV'],
      alias: {
        src: path.resolve(__dirname, './src')
      }
    }
  })
}
