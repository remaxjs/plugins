# @remax/plugin-linaria

增加 linaria css in js支持。

## 安装

```bash
$ npm install @remax/plugin-linaria linaria @linaria/shaker @linaria/babel-preset --save
```

```bash
$ yarn add @remax/plugin-linaria linaria @linaria/shaker @linaria/babel-preset
```

## 使用

```js
const linaria = require('@remax/plugin-linaria');

module.exports = {
    plugins: [linaria()],
};
```

## 根目录新增 babel.config.js 并配置

```js
module.exports = {
    presets: [
        ['remax', {
            framework: 'react',
            ts: true
        }],
        '@linaria' // 添加到 babel-preset
    ]
}
```

## 根目录新增 linaria.config.js 并配置
```js
module.exports = {
    rules: [
        {
            action: require('@linaria/shaker').default,
        },
        {
            test: /node_modules[\/\\](?!remax)/,
            action: "ignore"
        }
    ]
}
```

## LICENSE

[MIT](LICENSE)
