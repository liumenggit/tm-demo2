import {request} from "@/utils/http";


export function indexShop(): Promise<HttpResponse<IndexShop>> {
    return request.get('index/shop')
}
