declare interface Upload {
    header: object
    data: {
        code: number,
        url: string,
        msg: string
    },
    statusCode: number
}
