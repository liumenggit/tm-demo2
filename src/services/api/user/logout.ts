import {request} from "@/utils/http";

export function userLogout() {
    return request.post('user/logout')
}
