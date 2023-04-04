import {request} from "@/utils/http";
import {ApiResultOf} from "@/services/model/api-result";

export function verifyUserCard(userCardVerify: UserCardVerifyParams) {
    return request.post<ApiResultOf<UserCardVerify>>('user/card/verify', userCardVerify)
}