import { defineConfig } from 'vite'
import path from 'path'
import eslint from '../../plugin/vite-plugin-eslint'

export default defineConfig({
  plugins: [
    eslint({
      include: ['src/**/*.ts', 'src/**/*.tsx']
    })
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src'),
      name: 'MyLib',
      fileName: (format) => `my-lib.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React'
        }
      }
    }
  }
})
