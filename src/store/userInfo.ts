import {defineStore} from 'pinia'
import {UserInfosStates, ILogin} from '@/models/logoin'

export const useUserInfo = defineStore('userInfo', {
    state: (): UserInfosStates => ({
        userInfos: uni.getStorageSync('userInfo') || {
            userName: '',
            phone: '',
            time: '',
            roles: [],
            authBtnList: [],
            avatar: '',
            auth: {
                card: {
                    name: '',
                    cardId: ''
                }
            }
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
        async setUserAvatar(avatar: string) {
            this.userInfos.avatar = avatar
            uni.setStorageSync('userInfo', this.userInfos)
        },
        async setUserName(userName: string) {
            this.userInfos.userName = userName
            uni.setStorageSync('userInfo', this.userInfos)
        },
        async setUserPhone(phone: string) {
            this.userInfos.phone = phone
            uni.setStorageSync('userInfo', this.userInfos)
        },
        async setUserAuthCard(card: any) {
            this.userInfos.auth.card = card
            uni.setStorageSync('userInfo', this.userInfos)
        },
        async setToken(token: string) {
            // 存储用户信息到浏览器缓存
            uni.setStorageSync('token', token)
            this.token = token
        },
    },
})
