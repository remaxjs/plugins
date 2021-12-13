const { ESBuildMinifyPlugin } = require('esbuild-loader');

const RemaxEsbuild = () => {
  return {
    configWebpack({ config }) {
      config.plugin('RemaxEsbuildPlugin').use(ESBuildMinifyPlugin, [{
        target: 'es2015', minifyWhitespace: true,
      }]);
    },
  };
};

module.exports = RemaxEsbuild;

