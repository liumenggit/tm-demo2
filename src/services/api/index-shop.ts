import {request} from "@/utils/http";


export function indexShop(){
    return request.get<IndexShop>('index/shop')
}
