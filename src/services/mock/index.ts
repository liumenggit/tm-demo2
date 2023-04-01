import Mock from "better-mock/dist/mock.mp";

Mock.setup({timeout: 200})

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

Mock.mock('user/logout', {
    msg: '退出成功'
})

Mock.mock('user/update', {
    msg: '更新成功'
})

Mock.mock('user', {
    userName: '用户昵称'
})

Mock.mock('/list', {
    'list|10': [{
        'id|+1': 1,
        'email': '@EMAIL'
    }]
})

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

Mock.mock('phone/code/send', {
    msg: '发送成功'
})
Mock.mock('phone/code/verify', function (options: any) {
    return {
        code: options.body.code == 1234 ? 200 : 400,
        msg: options.body.code == 1234 ? '验证成功' : '验证码错误',
        phone: options.body.phone
    }
})
Mock.mock('user/set/nickname', function (options: any) {
    return {
        code: options.body.userName !== "违法" ? 200 : 400,
        msg: options.body.userName !== "违法" ? '修改成功' : '昵称违法',
        userName: options.body.userName
    }
})
Mock.mock('user/card/verify', function (options: any) {
    console.log('认证', options.body)
    return {
        code: options.body.name == "认证" ? 200 : 400,
        msg: options.body.name == "认证" ? '认证成功' : '认证失败',
        data: options.body
    }
})
Mock.mock('image/upload', function (options: any) {
    return {
        code: 200,
        msg: '上传成功',
        url: options.body
    }
})
Mock.mock('token/refresh', function (options: any) {
    return {
        code: 200,
        msg: '更新token成功',
        token: options.body
    }
})

Mock.mock('user/bespeak', {
    code: 200,
    msg: '更新token成功',
    'list|10': [{
        'title|+1': [
            '08:00-09:00',
            '09:00-10:00',
            '10:00-11:00',
            '11:00-12:00',
            '12:00-13:00',
            '13:00-14:00',
            '14:00-15:00',
            '15:00-16:00',
            '16:00-17:00',
            '17:00-18:00'
        ],
        'label|0-100': 1,
        'status|1': [true, false]
    }]
})