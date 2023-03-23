import {defineStore} from 'pinia'
import {UserInfosStates, ILogin} from '@/models/logoin'

export const useUserInfo = defineStore('userInfo', {
    state: (): UserInfosStates => ({
        userInfos: uni.getStorageSync('userInfo') || {
            userName: '',
            photo: '',
            time: '',
            roles: [],
            authBtnList: [],
        },
        token: uni.getStorageSync('token'),
    }),
    actions: {
        async setUserInfos(userInfos: ILogin) {
            // 存储用户信息到浏览器缓存
            uni.setStorageSync('userInfo', userInfos)
            this.userInfos = userInfos
            console.log(this.userInfos)
        },
        async setToken(token: string) {
            // 存储用户信息到浏览器缓存
            uni.setStorageSync('token', token)
            this.token = token
        },
    },
})
