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
const WxShake = ({apiList}) => {
    return {
        configWebpack({config}) {
            config.module
                .rule('wx-shake')
                .test(/index.js$/)
                .use('string-replace-loader')
                .loader('string-replace-loader')
                .options({
                    multiple: apiList !== undefined ? apiList : defaultShakeApiList
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