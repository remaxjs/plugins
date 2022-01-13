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

const WxShake = (apiList = null) => {
    let multipleList = []
    if (apiList) {
        multipleList = apiList
    } else {
        multipleList = defaultShakeApiList
    }
    return {
        configWebpack({config}) {
            config.module
                .rule('wx-shake')
                .test(/index.js$/)
                .use('string-replace-loader')
                .loader('string-replace-loader')
                .options({
                    multiple: multipleList
                        .map((search, index) => {
                            const replace = `REPLACEMENT${index}`; // or use random string
                            return [
                                {
                                    search,
                                    replace
                                },
                                {
                                    search: `wx.${search}`,
                                    replace
                                }
                            ];
                        })
                        .flat()
                })
                .end();
        }
    }
};
module.exports = WxShake;