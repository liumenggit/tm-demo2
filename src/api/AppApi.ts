import http from "@/utils/fetch"
import Mock from "better-mock/dist/mock.mp";
import {PhoneCodeVerify} from "@/models/page";

// Mock.setup({timeout: 200})
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

Mock.mock('user/login', {
    msg: '登录成功',
    code: 200,
    userInfo: {
        userName: '刘老六',
        phone: '18647012056',
        avatar: 'https://picsum.photos/80/80',
        roles: [],
        authBtnList: [],
        auth: {
            card: {
                name: '刘老六',
                cardId: '152104199312251919'
            }
        }
    },
    token: '185|z8zw9AdGA0Gnxv5E92PjWw3jNNWFTfQVm6wn1Yrv',
    refresh_token: '185|z8zw9AdGA0Gnxv5E92PjWw3jNNWFTfQVm6wn1Yrv'
})

//退出登录
export function userLogout() {
    return http({
        url: 'user/logout',
    })
}

Mock.mock('user/logout', {
    msg: '退出成功'
})

//更新用户信息
export function userUpdate(userInfo: object) {
    return http({
        url: 'user/update',
        data: userInfo
    })
}

Mock.mock('user/update', {
    msg: '更新成功'
})

//获取用户信息
export function userInfo() {
    return http({
        url: 'user',
        method: 'GET'
    })
}

Mock.mock('user', {
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

//推荐
export function indexCommend() {
    return http({
        url: 'index/commend',
        method: "GET"
    })
}

Mock.mock('index/commend', {
    carousel: [
        "https://picsum.photos/720/300",
        "https://picsum.photos/720/300",
        "https://picsum.photos/720/300",
        "https://picsum.photos/720/300",
        "https://picsum.photos/720/300",
    ],
    'grid|10': [{
        url: 'page/index/index',
        image: "https://picsum.photos/80/80",
        'title|+1': 1,
        'class|+1': 1,
    }],
    'notice': ['一一二二三三四五', '七七七八八九九'],
    'list|20': [{
        rightDetail: {
            title: '标题',
            subtitle: '副标题',
            time: '有效期时间文本'
        },
        type: '小说',
        thumb: "https://picsum.photos/100/100",
    }],
})

//商品

export function indexShop() {
    return http({
        url: 'index/shop',
        method: "GET"
    })
}

Mock.mock('index/shop', {
    carousel: [
        "https://picsum.photos/720/300",
        "https://picsum.photos/720/300",
        "https://picsum.photos/720/300",
        "https://picsum.photos/720/300",
        "https://picsum.photos/720/300",
    ],
    'grid|10': [{
        url: 'page/index/index',
        image: "https://picsum.photos/720/300",
        'title|+1': 1,
        'class|+1': 1,
    }],
    'notice': ['一一二二三三四五', '七七七八八九九'],
    'list|20': [{
        rightDetail: {
            title: '标题',
            subtitle: '副标题',
            time: '有效期时间文本'
        },
        type: '小说',
        thumb: "https://picsum.photos/100/100",
    }],
})

// 发送验证码
export function phoneCodeSend(phone: number) {
    return http({
        url: 'phone/code/send',
        data: {
            phone: phone
        }
    })
}

Mock.mock('phone/code/send', {
    msg: '发送成功'
})

// 手机验证码验证

// 验证用户手机号
export function phoneCodeVerify(verify: PhoneCodeVerify) {
    return http({
        url: 'phone/code/verify',
        data: verify
    })
}

Mock.mock('phone/code/verify', function (options: any) {
    return {
        code: options.body.code == 1234 ? 200 : 400,
        msg: options.body.code == 1234 ? '验证成功' : '验证码错误',
        phone: options.body.phone
    }
})

//更新你用户昵称
export function setUserName(userName: string) {
    return http({
        url: 'user/set/nickname',
        data: {
            userName: userName
        }
    })
}

Mock.mock('user/set/nickname', function (options: any) {
    return {
        code: options.body.userName !== "违法" ? 200 : 400,
        msg: options.body.userName !== "违法" ? '修改成功' : '昵称违法',
        userName: options.body.userName
    }
})

//验证用户实名认证
interface UserCardVerify {
    name: string,
    cardId: string,
}

export function userCardVerify(userCardVerify: UserCardVerify) {
    return http({
        url: 'user/card/verify',
        data: userCardVerify
    })
}

Mock.mock('user/card/verify', function (options: any) {
    console.log('认证', options.body)
    return {
        code: options.body.name == "认证" ? 200 : 400,
        msg: options.body.name == "认证" ? '认证成功' : '认证失败',
        data: options.body
    }
})

// 上传图片
export function imageUpload(imageUrl: string) {
    return http({
        url: 'image/upload',
        data: imageUrl
    })
}

Mock.mock('image/upload', function (options: any) {
    return {
        code: 200,
        msg: '上传成功',
        url: options.body
    }
})

//更新token
export function userTokenRefresh(token: string) {
    return http({
        url: 'token/refresh',
        data: token
    })
}

Mock.mock('token/refresh', function (options: any) {
    return {
        code: 200,
        msg: '更新token成功',
        token: options.body
    }
})