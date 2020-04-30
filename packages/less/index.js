const less = (options) => {
  return {
    configWebpack({ addCSSRule }) {
      createCSSRule({
        name: 'less',
        test: /\.less(\?.*)?$/,
        loader: require.resolve('less-loader'),
        options,
      });
    },
  };
};

module.exports = less;
