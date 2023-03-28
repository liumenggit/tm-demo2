interface upload {
    header: object
    data: {
        code: number,
        url: string,
        msg: string
    },
    statusCode: number
}

export {upload}