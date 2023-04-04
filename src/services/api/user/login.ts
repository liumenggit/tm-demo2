import {request} from "@/utils/http";
import {ApiResultOf} from "@/services/model/api-result";

export function userLogin(code: ILoginParams) {
    return request.post<ApiResultOf<UserInfosStates>>('user/login', {code: code})
}