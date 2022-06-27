const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig(
  {
    transpileDependencies: true,

    // maybe remove:
    css: {
      loaderOptions: {
        scss: {
          prependData: '@use "sass:math";',
        },
      },
    },
  },)
