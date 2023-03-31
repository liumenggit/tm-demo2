import {request} from '@/utils/http'

import {
    fetchConfig,
    fetchConfigDataType,
    fetchConfigMethod,
    fetchConfigResponseType,
    fetchConfigSuccessType
} from "@/tmui/tool/lib/interface";
import {fetchNet} from "@/tmui/tool/lib/fetch";

declare interface LoginParams {
    username: string;
    password: string;
}

interface RequestSuccessCallbackResult<T> {
    data?: T;
    statusCode: number;
    header: any;
    cookies: string [];
}

interface GeneralCallbackResult {
    /**
     * 错误信息
     */
    errMsg: string;
}

interface commend {
    carousel: [string];
    grid: [object]
}

async function http(cog: fetchConfig) {
    return fetchNet.request()
}


export async function apiLogin(data: LoginParams) {
    return http({url: 'index/commend', data: data})
}

apiLogin({username: '123123', password: '123123123'}).then((res) => {
    console.log('apiLogin', res.data)
})