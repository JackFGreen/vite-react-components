import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import path from 'path'
import eslint from '../../plugin/vite-plugin-eslint'

// import babel from '@rollup/plugin-babel';
// import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  // plugins: [
  //   reactRefresh(),

  //   eslint({
  //     include: ['src/**/*.ts', 'src/**/*.tsx']
  //   })

  //   // babel({
  //   // 	babelHelpers: 'bundled'
  //   // }),
  //   // typescript(),
  // ],
  // resolve: {
  //   alias: {
  //     src: path.resolve(__dirname, './src')
  //   }
  // },
  // server: {
  //   port: 8888
  // },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src'),
      name: 'MyLib',
      fileName: (format) => `my-lib.${format}.js`
    }
    // rollupOptions: {
    //   // 确保外部化处理那些你不想打包进库的依赖
    //   external: ['vue'],
    //   output: {
    //     // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    //     globals: {
    //       vue: 'Vue'
    //     }
    //   }
    // }
  }
})
