import Request, {HttpResponse, HttpRequestConfig, HttpError} from "luch-request";
import jwt from '@/utils/jwt'

const http = new Request()
http.setConfig((config: HttpRequestConfig) => {
    config.baseURL = uni.$tm.config.custom?.baseURL, config.header = {}, config.custom = {
        auth: true,
        loading: false
    }
    config.header = {
        ...config.header
    }
    config.custom = {
        auth: false,
        loading: false
    }
    return config
})
// 请求之前拦截
http.interceptors.request.use((config: HttpRequestConfig) => {
        config.header = {
            ...config.header,
            a: 2
        }
        if (config.custom?.auth) config.header.Authorization = jwt.getAccessToken();
        if (config.custom?.loading) uni.showLoading({mask: true})
        return config
    }, (config: HttpRequestConfig) => {
        return Promise.reject(config)
    }
)
// 请求之后拦截
http.interceptors.response.use(async (response: HttpResponse) => {
    if (response.config.custom?.loading) uni.hideLoading()
    if (response.config.custom?.auth) {
        switch (response.data.code) {
            case 4011:
                //刷新token并从新发起请求
                jwt.setAccessToken(response.data.token);
                let repeatRes = await http.request(response.config);
                if (repeatRes) response = repeatRes;
                return Promise.reject(response)
        }
    }
    return response
}, (response: HttpError) => {
    switch (response.statusCode) {
        case 401:
            uni.showToast({
                title: '请登录后使用功能',
                icon: "none"
            });
            jwt.setLoginState(false)
        case 404:
            uni.showToast({
                title: 'ERROR',
                icon: 'error'
            });
        case 200:
            uni.showToast({
                title: response.data.msg,
                icon: 'none'
            });
    }
    return Promise.reject(response)
})

export default http
