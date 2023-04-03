import {request} from "@/utils/http";

export function phoneCodeSend(phone: number): Promise<HttpResponse<{ msg: string }>> {
    return request.post('phone/code/send', {phone: phone})
}

export function phoneCodeVerify(verify: PhoneCodeVerify): Promise<HttpResponse<{ phone: number }>> {
    return request.post('phone/code/verify', {verify: verify})
}