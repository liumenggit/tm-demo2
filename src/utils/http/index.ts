import Request from 'luch-request'
const HEADER = {
  'Content-Type': 'application/json;charset=UTF-8;',
  'Accept': 'application/json, text/plain, */*',
}

function createRequest() {
  return new Request({
    baseURL: '',
    header: HEADER,
    custom: {
      auth: true,
    },
  })
}

const request = createRequest()

request.interceptors.request.use(
  (options) => {
    return options
  },
  options => Promise.reject(options),
)

request.interceptors.response.use(
  async (response) => {
    return Promise.reject(response)
  },
  (error) => {
    return Promise.reject(error)
  },
)

export { request }
