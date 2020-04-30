# @remax/plugin-sass

增加 Sass 支持。

## 安装

```bash
$ npm install @remax/plugin-sass --save
```

## 使用

```js
const sass = require('@remax/plugin-sass');

module.exports = {
  plugins: [sass()],
};
```

## 配置

同 `sass-loader` 的[配置](https://github.com/webpack-contrib/sass-loader#options)。

## LICENSE

[MIT](LICENSE)
