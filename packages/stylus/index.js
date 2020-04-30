const stylus = (options) => {
  return {
    configWebpack({ addCSSRule }) {
      createCSSRule({
        name: 'stylus',
        test: /\.styl(us)?(\?.*)?$/,
        loader: require.resolve('stylus-loader'),
        options,
      });
    },
  };
};

module.exports = stylus;
