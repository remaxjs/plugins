const stylus = (options) => {
  return {
    configWebpack({ addCSSRule }) {
      addCSSRule({
        name: 'stylus',
        test: /\.styl(us)?(\?.*)?$/,
        loader: require.resolve('stylus-loader'),
        options,
      });
    },
  };
};

module.exports = stylus;
