const linaria = () => {
    return {
        configWebpack({config}) {
            config.module
                .rule('js')
                .use('linarial-loader')
                .loader(require.resolve('@linaria/webpack-loader'))
                .options({
                    sourceMap: process.env.NODE_ENV !== 'production',
                })
        }
    };
};

module.exports = linaria;
