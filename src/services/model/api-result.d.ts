export interface ApiResultOf<T> {
    code: number
    data: T
    error?: number
    message?: string
    status?: string

}

interface EntityResult<T> {
    entity: T
}

export type ApiResult = ApiResultOf<any>

export type ApiResultOfEntity<T> = ApiResultOf<EntityResult<T>>
