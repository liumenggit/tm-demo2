export interface ILogin {
    userName: string
    avatar: string
    phone: string
    roles: Array<string>
    authBtnList: Array<string>
}

export interface ILoginParams {
    page: number
    pageSize: number

    [keys: string]: any
}

export interface UserInfosStates {
    userInfos: ILogin
    token: string
}
