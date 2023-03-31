import Request from 'luch-request/src/lib/luch-request'

const HEADER = {
    'Content-Type': 'application/json;charset=UTF-8;',
    'Accept': 'application/json, text/plain, */*',
}

function createRequest() {
    return new Request({
        baseURL: '',
        // header: HEADER,
        custom: {
            auth: false,
        },
    })
}

const request = createRequest()

request.interceptors.request.use(
    (options) => {
        if (options.custom?.auth) {
            return Promise.reject(options)
        }
        return options
    },
    options => Promise.reject(options),
)

request.interceptors.response.use(
    async (response) => {

        const {data, statusCode} = response
        if (statusCode == 200) {
            return Promise.resolve(response)
        }
        return Promise.reject(response)
    },
    (error) => {
        return Promise.reject(error)
    },
)

export {request}
