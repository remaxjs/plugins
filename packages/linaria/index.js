const linaria = (options) => {
    return {
        configWebpack({config}) {
            config.module
                .rule('js')
                .use('linarial-loader')
                .loader(require.resolve('@linaria/webpack-loader'))
                .options(options)
        }
    };
};

module.exports = linaria;
