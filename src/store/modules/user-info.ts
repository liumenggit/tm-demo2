import {defineStore} from 'pinia'
import {verifyPhoneCode} from "@/services/api/phone-verify";
import {userLogin} from "@/services/api/user/login";
import {uploadImage} from "@/services/api/upload-image";
import {setUserName} from "@/services/api/user/set-name";
import {verifyUserCard} from "@/services/api/user/card-verify";
import {refreshUserToken} from "@/services/api/user/token-refresh";

export const useUserInfo = defineStore('userInfo', {
    state: (): UserInfosStates => ({
        userInfo: uni.getStorageSync('userInfo') || {
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
        refresh_token: uni.getStorageSync('refresh_token'),
    }),
    getters: {
        userName(): string {
            return this.userInfo.userName
        }
    },
    actions: {
        async login(code: ILoginParams) {
            try {
                const {data} = await userLogin(code)
                this.userInfo = data.data.userInfo
                uni.setStorageSync('userInfo', this.userInfo)
                this.token = data.data.token
                uni.setStorageSync('token', this.token)
                this.refresh_token = data.data.refresh_token
                uni.setStorageSync('refresh_token', this.refresh_token)
                return Promise.resolve(data)
            } catch (err: any) {
                return Promise.reject(err)
            }
        },
        async setUserInfos(userInfos: ILogin) {
            uni.setStorageSync('userInfo', userInfos)
            this.userInfo = userInfos
        },
        async setAvatar(avatar: string) {
            try {
                const {data} = await uploadImage(avatar)
                this.userInfo.avatar = data.data.url
                uni.setStorageSync('userInfo', this.userInfo)
                return Promise.resolve(data)
            } catch (err: any) {
                return Promise.reject(err)
            }
        },
        async setName(userName: string) {
            try {
                const {data} = await setUserName(userName)
                this.userInfo.userName = data.data?.userName!
                uni.setStorageSync('userInfo', this.userInfo)
                return Promise.resolve(data)
            } catch (err: any) {
                return Promise.reject(err)
            }
        },
        async setPhone(phone: PhoneCodeVerify) {
            try {
                const {data} = await verifyPhoneCode(phone)
                this.userInfo.phone = data.data?.phone!
                uni.setStorageSync('userInfo', this.userInfo)
                return Promise.resolve(data)
            } catch (err: any) {
                return Promise.reject(err)
            }
        },
        async setAuthCard(card: UserCardVerifyParams) {
            try {
                const {data} = await verifyUserCard(card)
                this.userInfo.auth.card = data.data
                uni.setStorageSync('userInfo', this.userInfo)
                return Promise.resolve(data)
            } catch (err: any) {
                return Promise.reject(err)
            }
        },
        async setToken(token: string) {
            uni.setStorageSync('token', token)
            this.token = token
        },
        async refreshToken(token: string) {
            try {
                const {data} = await refreshUserToken(token)
                this.token = data.data.token
                uni.setStorageSync('token', this.token)
                return Promise.resolve(data)
            } catch (err: any) {
                return Promise.reject(err)
            }
        }
    },
})
