import {request} from "@/utils/http";
import {ApiResultOf} from "@/services/model/api-result";

export function getUserInfo() {
    return request.get<ApiResultOf<UserInfosStates>>('user')
}
