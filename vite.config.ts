import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import path from 'path'
import eslint from './plugin/vite-plugin-eslint'

// import babel from '@rollup/plugin-babel';
// import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  plugins: [
    reactRefresh(),

    eslint({
      include: ['src/**/*.ts', 'src/**/*.tsx']
    })

    // babel({
    // 	babelHelpers: 'bundled'
    // }),
    // typescript(),
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
