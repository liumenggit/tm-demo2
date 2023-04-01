import {request} from "@/utils/http";

export function userLogin(code: ILoginParams): Promise<HttpResponse<UserInfosStates>> {
    return request.post('user/login', {code: code})
}
