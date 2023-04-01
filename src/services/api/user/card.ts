import {request} from "@/utils/http";

export function userCardVerify(userCardVerify: UserCardVerify): Promise<HttpResponse<UserCardVerify>> {
    return request.post('user/card/verify', userCardVerify)
}

