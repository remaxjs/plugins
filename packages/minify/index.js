const { ESBuildMinifyPlugin } = require('esbuild-loader');

const defaultOptions = {
  target: 'es2015',
  minifyWhitespace: true,
};

const RemaxMinify = (options) => {
  return {
    configWebpack({ config }) {
      config.plugin('RemaxMinifyPlugin').use(ESBuildMinifyPlugin, [options ? options : defaultOptions]);
    },
  };
};

module.exports = RemaxMinify;

