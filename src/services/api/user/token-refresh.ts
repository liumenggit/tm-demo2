import {request} from "@/utils/http";
import {ApiResultOf} from "@/services/model/api-result";

export function refreshUserToken(token: string) {
    return request.post<ApiResultOf<{ token: string }>>('user/card/verify', {token: token})
}

