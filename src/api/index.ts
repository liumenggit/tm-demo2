import {request} from '@/utils/http'
import {
    fetchConfig,
    fetchConfigDataType,
    fetchConfigMethod,
    fetchConfigResponseType,
    fetchConfigSuccessType
} from "@/tmui/tool/lib/interface";


export interface ApiResultOf<T> {
    error: number
    message?: string
    result?: T
}

interface EntityResult<T> {
    entity: T
}

export type ApiResult = ApiResultOf<any>

export type ApiResultOfEntity<T> = ApiResultOf<EntityResult<T>>


declare interface LoginParams {
    username: string;
    password: string;
}

declare interface LoginModel {
    token: string;
    type?: string
    expiration?: string
}

declare interface LoginParams {
    username: string;
    password: string;
}

declare interface LoginModel {
    token: string;
    type?: string
    expiration?: string
}


function test() {
    return {
        data: {
            result: '12313'
        }
    }
}

interface RequestSuccessCallbackResult {
    /**
     * 开发者服务器返回的数据
     */
    data: string | AnyObject | ArrayBuffer;
    /**
     * 开发者服务器返回的 HTTP 状态码
     */
    statusCode: number;
    /**
     * 开发者服务器返回的 HTTP Response Header
     */
    header: any;
    /**
     * 开发者服务器返回的 cookies，格式为字符串数组
     */
    cookies: string [];
}

export async function logintest(cog: fetchConfig): Promise<fetchConfigSuccessType> {
    // try {
    //     const {data} = await test()
    //     const result = data.result!
    //     return Promise.resolve(result)
    // } catch (err: any) {
    //     return Promise.reject(err)
    // }
    uni.$tm.fetch.request(cog, async (cog: fetchConfig) => {
        // console.log('请求前', cog)
        if (cog) cog.url = uni.$tm.config.custom?.baseURL + cog.url
        return cog || {}
    }, async (result: fetchConfigSuccessType) => {
        // return result
        return Promise.reject(result)
    }, async (result: fetchConfigSuccessType) => {
        switch (result.statusCode) {
            case 404:
                uni.showToast({
                    icon: 'error',
                    title: String(result.statusCode)
                })
        }
        // return result
        return Promise.resolve(result)
    })
}

export async function loginte(cog: LoginParams) {
    return logintest({url: 'index/user'})
    // try {
    //     const { data } = await
    //     const result = data.result!
    //     return Promise.resolve(result)
    // }
    // catch (err: any) {
    //     return Promise.reject(err)
    // }
}