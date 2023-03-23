import http from "@/utils/fetch"
import Mock from "better-mock/dist/mock.mp";

Mock.setup({timeout: 400})

const mockUrl = uni.$tm.config.custom?.mockUrl
// create      添加
// delete      删除
// update      更新
// get         获取
// list        列表
// count       统计
// batch       批量
//
// search      搜索
// query       查询
//
// apply       申请
// confirm     确认
// check       检查
// verify      验证
// change      更改
//
// fetch       拉取
// push        推送
// send        发送
// notify      通知
// sync        同步
//
// bind        绑定
// unbind      解绑
//
// open        开启
// close       关闭
// cancel      取消
// done        结束
//
// upload      上传
//
// accept      同意
// reply       回复
// refresh     刷新
//登录
export function userLogin(code: string) {
    return http({
        url: 'user/login',
        data: {code: code}
    })
}

Mock.mock(mockUrl + 'user/login', {
    'list|10': [{
        'id|+1': 1,
        'email': '@EMAIL'
    }]
})

//退出登录
export function userLogout() {
    return http({
        url: 'user/logout',
    })
}

Mock.mock(mockUrl + 'user/logout', {
    msg: '退出成功'
})

//更新用户信息
export function userUpdate(userInfo: object) {
    return http({
        url: 'user/update',
        data: userInfo
    })
}

Mock.mock(mockUrl + 'user/update', {
    msg: '更新成功'
})

//获取用户信息
export function userInfo() {
    return http({
        url: 'user',
        method: 'GET'
    })
}

Mock.mock(mockUrl + 'user', {
    userName: '用户昵称'
})

//分页查询
interface Page {
    page?: number,
    limit?: number,
    title?: string
}

export function contentList(page: Page) {
    return http({
        url: '/list',
        data: page
    })
}

Mock.mock('/list', {
    'list|10': [{
        'id|+1': 1,
        'email': '@EMAIL'
    }]
})