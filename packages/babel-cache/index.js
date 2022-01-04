const babelCache = ({cacheDir}) => {
    return {
        configWebpack({config}) {
            config.module
                .rule('js')
                .use('babel')
                .tap(options => {
                    options.cacheDirectory = cacheDir ? cacheDir : true
                    return options
                })
        },
    };
};

module.exports = babelCache;