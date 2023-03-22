import {fetchConfig, fetchConfigSuccessType, fetchConfigMethod} from "@/tmui/tool/lib/interface";

interface custom {
    auth?: boolean,
    loading?: boolean
}

function http(cog: fetchConfig) {
    return uni.$tm.fetch.request(cog, function (cog: fetchConfig) {
        // console.log('请求前', cog)
        if (cog) cog.url = uni.$tm.config.custom?.baseURL + cog.url
        return cog || {}
    }, function (result: fetchConfigSuccessType) {
        // console.log('请求成功', result)
    }, function (result: fetchConfigSuccessType) {
        // console.log('complete', result)
        switch (result.statusCode) {
            case 404:
                uni.showToast({
                    icon:'error',
                    title: String(result.statusCode)
                })
        }
    })
}

export default http