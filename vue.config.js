const path = require("path");

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
    }
  },
  // disable hashes in filenames
  filenameHashing: false,
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({ /* ... */ });

    if (process.env.NODE_ENV === 'production') {
      //delete HTML related webpack plugins
      config.plugins.delete('html')
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
    }
  },
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  css: {
    extract: false
  },
  productionSourceMap: false
}
