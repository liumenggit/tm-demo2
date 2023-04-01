import {request} from "@/utils/http";

export function userTokenRefresh(token: string): Promise<HttpResponse<{ token: string }>> {
    return request.post('user/card/verify', {token: token})
}

