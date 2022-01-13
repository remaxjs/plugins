# @remax/plugin-wx-shake

用于移除微信协议隐私中没使用过的wx接口

该插件源于Remax好友 [@BlackCloud37](https://github.com/BlackCloud37) 编写。

> 注意!!! 只能移除小程序中没有使用的wx接口，如果使用到接口请不要移除，否则会导致小程序无法正常运行

## 安装

> 注意 string-replace-loader 版本需要是 2.3.0 请勿使用3以上的版本，3以上版本是适配 webpack5 ,Remax 2.0 版本暂不适用

```bash
$ npm install @remax/plugin-wx-shake string-replace-loader@2.3.0 --save
or
$ yarn add @remax/plugin-wx-shake  string-replace-loader@2.3.0 -D

```

## 使用

```js
// remax.config.js
const WxShake = require('@remax/plugin-wx-shake');

module.exports = {
    plugins: [WxShake()],
};
```

## 配置

支持传入参数apiList，当有参数的时候会使用开发者参数代替默认参数，如果不传则使用默认参数。

默认以下数组,注意参数拼写为`apiList`。

```js
const defaultShakeApiList = [
    'getWeRunData',
    'chooseLocation',
    'chooseInvoiceTitle',
    'chooseInvoice',
    'chooseImage',
    'chooseMedia',
    'chooseLicensePlate',
    'openBluetoothAdapter',
    'createBLEPeripheralServer',
    'addPhoneContact',
    'addPhoneRepeatCalendar',
    'addPhoneCalender',
    'saveFileToDisk',
]
```

```js
// remax.config.js
const WxShake = require('@remax/plugin-wx-shake');

// eg: 只需要移除微信运动接口
const apiList = ['getWeRunData']

module.exports = {
    plugins: [WxShake(apiList)],
};
```

## LICENSE

[MIT](LICENSE)
