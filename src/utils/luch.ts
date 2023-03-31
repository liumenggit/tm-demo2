import {request} from "@/utils/http";
import HttpPromise from "luch-request";
import HttpRequestConfig from "luch-request/src/lib/luch-request";
import HttpRequest from "luch-request";

interface commend {
    carousel: Array<string>
    grid: Array<grid>
    notice: Array<string>,
    list: Array<object>
}

interface grid {
    url: string
    image: string
    title: number
    class: number
}

export interface HttpResponse<T = any> {
    statusCode: number;
    cookies: Array<string>;
    data: T;
    errMsg: string;
    header: AnyObject;
    rawData: T;
}

export async function luchTest(data?: any): Promise<HttpResponse<commend>> {
    return await request.get('index/commend')
}