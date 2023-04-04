import {request} from "@/utils/http";

export function mockTest() {
    return request.get('index/test')
}

export function indexCommend() {
    return request.get<IndexShop>('index/commend')
}
