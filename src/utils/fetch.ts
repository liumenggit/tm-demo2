import {fetchConfig, fetchConfigSuccessType, fetchConfigMethod} from "@/tmui/tool/lib/interface";
import type {Dirent} from "fs";
// import { fetchNet } from '@/tmui/tool/lib/fetch';

interface custom {
    auth?: boolean,
    loading?: boolean
}

async function http(cog: fetchConfig) {
    return uni.$tm.fetch.request(cog, async (cog: fetchConfig) => {
        // console.log('请求前', cog)
        if (cog) cog.url = uni.$tm.config.custom?.baseURL + cog.url
        return cog || {}
    }, async (result: fetchConfigSuccessType)=> {
        return result
        // console.log('请求成功', result)
    }, async (result: fetchConfigSuccessType) => {
        // console.log('complete', result)
        switch (result.statusCode) {
            case 404:
                uni.showToast({
                    icon: 'error',
                    title: String(result.statusCode)
                })
        }
        return result
        // return Promise.reject(result)
    })
}

export default http