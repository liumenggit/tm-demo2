declare interface HttpResponse<T = any> {
    statusCode: number;
    cookies: Array<string>;
    data: T;
    errMsg: string;
    header: AnyObject;
    rawData: T;
}