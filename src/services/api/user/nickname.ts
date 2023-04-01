import {request} from "@/utils/http";

export function setUserName(userName: string) {
    return request.post('user/set/nickname', {userName: userName})
}

