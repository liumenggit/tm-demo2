import {request} from "@/utils/http";
import {ApiResultOf} from "@/services/model/api-result";

export function userBespeak(userBespeakParams: UserBespeakParams){
    return request.post<ApiResultOf<UserBespeakModel>>('user/bespeak', userBespeakParams)
}

