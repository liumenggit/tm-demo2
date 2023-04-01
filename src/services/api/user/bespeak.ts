import {request} from "@/utils/http";

export function userBespeak(userBespeakParams: UserBespeakParams): Promise<HttpResponse<UserBespeakModel>> {
    return request.post('user/bespeak', userBespeakParams)
}

