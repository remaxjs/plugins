# @remax/plugin-esbuild

使用[esbuild-loader](https://github.com/privatenumber/esbuild-loader)提升中大型Remax项目打包速度和压缩项目文件大小。

> 小型Remax项目不推荐开启，因为原生的文件编译打包足够快。 反之中大型Remax项目文件开启则会获取显著效果。

## 安装

```bash
$ npm install @remax/plugin-esbuild --save
或者
$ yarn add @remax/plugin-esbuild -D
```

## 使用

```js
// remax.config.js
const RemaxEsbuild = require('@remax/plugin-esbuild')

module.exports = {
  plugins: [RemaxEsbuild()]
};
```

## 配置

暂不支持配置

> 因为[esbuild-loader](https://github.com/privatenumber/esbuild-loader) 中配置只有2个(target/css),为了兼容小程序默认使用了`target:"es2015"` (es6)语法。
> css则不开启

## LICENSE

[MIT](LICENSE)
