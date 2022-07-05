const { defineConfig } = require('@vue/cli-service')

const path = require('path')

module.exports = defineConfig(
  {
    transpileDependencies: true,

    publicPath: '../static/frontend/',
    outputDir: path.resolve(__dirname, '../static/frontend/'),
    filenameHashing: false,
    runtimeCompiler: true,
    devServer: { devMiddleware: { writeToDisk: true, } },
  },)
