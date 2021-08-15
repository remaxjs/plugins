const linaria = () => {
    console.log(require.resolve('@linaria/webpack-loader'));
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
