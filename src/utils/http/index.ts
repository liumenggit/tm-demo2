import Request from 'luch-request/src/lib/luch-request'
import {getBaseUrl} from '@/utils/env'
import {ApiResult} from "@/services/model/apiResult";
import {ResultEnum} from "@/enums/httpEnum";
import {toast} from "@/tmui/tool/function/util";
import HttpRequest from "luch-request/src/lib/luch-request";

const BASE_URL = getBaseUrl()
const HEADER = {
    'Content-Type': 'application/json;charset=UTF-8;',
    'Accept': 'application/json, text/plain, */*',
}

function createRequest() {
    return new Request({
        baseURL: BASE_URL,
        header: HEADER,
        custom: {
            auth: false,
        },
    })
}

const request = createRequest()

request.interceptors.request.use(
    (options) => {
        console.log('options', options)
        if (options.custom?.auth) {
            return Promise.reject(options)
        }
        return options
    },
    options => Promise.reject(options),
)

request.interceptors.response.use(
    async (response) => {
        // Http基础错误处理
        const {data, statusCode} = response

        if (statusCode !== 200) {
            toast(response.errMsg)
            response.data = {error: 1, message: response.errMsg}
            return Promise.reject(data)
        }
        // 验证自定义错误码
        const {error, message, code} = data as ApiResult
        if (code === ResultEnum.SUCCESS || code === ResultEnum.CUSTOM_SUCCESS)
            return Promise.resolve(data)
        message && toast(message)
        return Promise.reject(data)
    },
    (error) => {
        return Promise.reject(error)
    },
)

export {request}
