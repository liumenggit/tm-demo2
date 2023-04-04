import {request} from "@/utils/http";
import {ApiResultOf} from "@/services/model/api-result";

export function setUserName(userName: string) {
    return request.post<ApiResultOf<{ userName: string }>>('user/set/nickname', {userName: userName})
}