const sass = (options) => {
  return {
    configWebpack({ addCSSRule }) {
      addCSSRule({
        name: 'sass',
        test: /\.s[ac]ss(\?.*)?$/,
        loader: require.resolve('sass-loader'),
        options,
      });
    },
  };
};

module.exports = sass;
