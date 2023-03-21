import http from "@/utils/request";

export function login(data: any) {
    return http.request({
        url: '/user/login',
        method: 'POST',
        custom: {loading: true},
        data
    })
}

export function test(data: any) {
    return http.request({
        url: '/user/login',
        method: 'POST',
        data
    })
}
