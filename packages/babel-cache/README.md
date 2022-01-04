# @remax/plugin-babel-cache

babel-cache 用于缓存 Remax 中大型项目 中 babel js/ts 文件编译。

> 当开启该插件后，每当移除 dist 输出目录后，也需要一并移除 cache 目录。(因为当 babel 有缓存目录时会优先读取目录，当移除 Remax 构建输出文件后，组件依赖名称已变，无法命中缓存，导致引用依赖失效。)

## 安装

```bash
$ npm install @remax/plugin-babel-cache --save
或者
$ yarn add  @remax/plugin-babel-cache -D
```

## 使用

```js
const BabelCache = require('@remax/plugin-babel-cache')

module.exports = {
    // cache 目录默认为 node_modules 下的 .cache 目录
    plugins: [BabelCache()]
};
```

## 配置

支持配置 cacheDir 参数，用于设置需要缓存的目录名

```js
const BabelCache = require('@remax/plugin-babel-cache')
const path = require('path');

module.exports = {
    plugins: [BabelCache({cacheDir: path.resolve(__dirname, '.cache')})]
};

```

## LICENSE

[MIT](LICENSE)
