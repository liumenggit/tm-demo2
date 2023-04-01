import {request} from "@/utils/http";

export function userTokenRefresh(token: string) {
    return request.post('token/refresh', {token: token})
}

