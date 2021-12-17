# @remax/plugin-minify

使用[esbuild-loader](https://github.com/privatenumber/esbuild-loader) 压缩中大型 Remax 项目 js 文件。

> 小型 Remax 项目不推荐开启，因为原生文件编译打包已足够快。反之中大型 Remax 项目开启会获取显著效果。

## 安装

```bash
$ npm install @remax/plugin-minify --save
或者
$ yarn add @remax/plugin-minify -D
```

## 使用

```js
// remax.config.js
const RemaxMinifyPlugin = require('@remax/plugin-minify')

module.exports = {
  plugins: [RemaxMinifyPlugin()]
};
```

## 配置

[esbuild-loader配置项](https://github.com/privatenumber/esbuild-loader#minify)

使用默认配置即可获得不错的效果，如需要更极至压缩请自行配置即可。

```js
// remax.config.js
const RemaxMinifyPlugin = require('@remax/plugin-minify')

module.exports = {
  plugins: [RemaxMinifyPlugin({
    target: "es2015",
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true
  })]
};
```

> 为了兼容小程序默认使用了 `target:"es2015"` (es6)语法，请勿使用新语法和 `minifyWhitespace: true` (移除空白)。 css 则不开启。

## LICENSE

[MIT](LICENSE)
