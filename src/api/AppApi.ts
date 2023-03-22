import http from "@/utils/fetch"
import Mock from "better-mock/dist/mock.mp";
const baseUrl = uni.$tm.config.custom?.baseURL
//请求方法
export function login(code: string) {
    return http({
        url: '/login',
        data:{code:code}
    })
}
//模拟数据
Mock.mock(baseUrl + '/login', {
    'list|10': [{
        'id|+1': 1,
        'email': '@EMAIL'
    }]
})
//请求格式
interface page{
    page?:number,
    limit?:number,
    title?:string
}
//请求方法
export function contentList(page:page) {
    return http({
        url: '/list',
        data:page
    })
}
//模拟数据
Mock.mock(baseUrl + '/list', {
    'list|10': [{
        'id|+1': 1,
        'email': '@EMAIL'
    }]
})