import {defineStore} from 'pinia'
import {UserInfosStates, ILogin} from '@/models/user'
import {
    imageUpload,
    phoneCodeVerify,
    setUserName,
    userCardVerify, userLogin, userTokenRefresh,
} from "@/api/AppApi";
import {PhoneCodeVerify} from "@/models/page";
import {upload} from "@/models/imageUpload";
import {fetchConfigSuccessType} from "@/tmui/tool/lib/interface";
import RequestSuccessCallbackResult = UniNamespace.RequestSuccessCallbackResult;
import * as http from "http";
import {promises} from "dns";
import {Dirent} from "fs";

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
        refresh_token: uni.getStorageSync('refresh_token'),
    }),
    getters: {
        userName(): string {
            return this.userInfos.userName
        }
    },
    actions: {
        async login(code: string) {
            return new Promise((resolve, reject) => {
                userLogin(code).then((res: any) => {
                    console.log('login', res)
                    this.userInfos = res.data.userInfo
                    uni.setStorageSync('userInfo', this.userInfos)
                    this.token = res.data.token
                    uni.setStorageSync('token', this.token)
                    this.refresh_token = res.data.refresh_token
                    uni.setStorageSync('refresh_token', this.refresh_token)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        async setUserInfos(userInfos: ILogin) {
            uni.setStorageSync('userInfo', userInfos)
            this.userInfos = userInfos
        },
        async setAvatar(avatar: string) {
            return new Promise((resolve, reject) => {
                imageUpload(avatar).then((res: any) => {
                    console.log('ur;', res)
                    this.userInfos.avatar = res.data.url
                    uni.setStorageSync('userInfo', this.userInfos)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        async setName(userName: string) {
            return new Promise((resolve, reject) => {
                setUserName(userName).then((res: any) => {
                    this.userInfos.userName = res.data.userName
                    uni.setStorageSync('userInfo', this.userInfos)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        async setPhone(phone: PhoneCodeVerify) {
            return new Promise((resolve, reject) => {
                phoneCodeVerify(phone).then((res: any) => {
                    this.userInfos.phone = res.data.phone
                    uni.setStorageSync('userInfo', this.userInfos)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        async setAuthCard(card: any) {
            return new Promise((resolve, reject) => {
                userCardVerify(card).then((res: any) => {
                    this.userInfos.auth.card = res.data.data
                    uni.setStorageSync('userInfo', this.userInfos)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        async setToken(token: string) {
            uni.setStorageSync('token', token)
            this.token = token
        },
        async refreshToken(token: string) {
            return new Promise((resolve, reject) => {
                userTokenRefresh(token).then((res: any) => {
                    this.token = res.data.token
                    uni.setStorageSync('token', res.data.token)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    },
})
