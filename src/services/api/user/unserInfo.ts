import {request} from "@/utils/http";

export function userInfo(): Promise<HttpResponse<UserInfosStates>> {
    return request.get('user')
}
