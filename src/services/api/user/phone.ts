import {request} from "@/utils/http";
import {PhoneCodeVerify} from "@/services/model/page";
import {HttpResponse} from "luch-request";

export function phoneCodeSend(phone: number) {
    return request.post('phone/code/send', {phone: phone})
}

export function phoneCodeVerify(verify: PhoneCodeVerify): Promise<HttpResponse<{ phone: number }>> {
    return request.post('phone/code/verify', {verify: verify})
}