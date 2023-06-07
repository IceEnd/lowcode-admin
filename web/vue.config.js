const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave: false,

  indexPath: 'index.html',

  outputDir: path.resolve(__dirname, './dist'),

  devServer: {
    port: 80,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:3001/',
        ws: true,
        changOrigin: true,
      },
      '/static': {
        target: 'http://localhost:3001/',
        ws: true,
        changOrigin: true,
      },
    },
    client: {
      overlay: false,
    },
  },

  configureWebpack: {
    devtool: 'source-map',
    entry: '@src/main.ts',

    devServer: {
      client: {
        overlay: true,
      },
    },

    resolve: {
      alias: {
        // vue$: path.resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm-bundler.js'),
        '@src': path.resolve(__dirname, './src'),
      },
    },

    plugins: [new MonacoWebpackPlugin({ languages: ['javascript'] })],
  },
});
