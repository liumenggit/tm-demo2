export interface ILogin {
    userName: string
    avatar: string
    phone: string
    roles: Array<string>
    authBtnList: Array<string>
    auth: {
        card: {
            name: string,
            cardId: string
        }
    }
}

export interface ILoginParams {
    page: number
    pageSize: number

    [keys: string]: any
}

export interface UserInfosStates {
    userInfos: ILogin
    token: string,
    refresh_token:string
}
