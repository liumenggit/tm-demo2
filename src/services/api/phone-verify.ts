import {request} from "@/utils/http";
import {ApiResultOf} from "@/services/model/api-result";

export function sendPhoneCode(phone: number) {
    return request.post<ApiResultOf<any>>('phone/code/send', {phone: phone})
}

export async function verifyPhoneCode(verify: PhoneCodeVerify) {
    return await request.post<ApiResultOf<{ phone: number }>>('phone/code/verify', verify)
}