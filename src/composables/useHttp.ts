import axios, { Method } from 'axios'
export interface ResponseInterface<RT> {
  error: boolean,
  data?: RT | null,
  message?: string
}

const baseUrl = 'https://catfact.ninja'

// Fetch

// export const http = async<RT, BT = undefined, PT = undefined> ({
//   url,
//   method = 'get',
//   body, params
// }: {
//   url: string,
//   method?: Method,
//   body?: BT,
//   params?: PT
// }): Promise<ResponseInterface<RT>> => await fetch(formatUrl<PT | undefined>(url, params), {
//   method,
//   body: body ? JSON.stringify(body) : undefined,
//   headers: { 'Content-type': 'application/json' }
// }).then(res => res.json()).then((response) => {
//   return {
//     error: false,
//     data: response
//   }
// }).catch((error) => {
//   return {
//     error: true,
//     message: error?.message || 'General error'
//   }
// })
//
// function formatParams<BT> (fullUrl: string, params: BT): string {
//   const url = new URL(fullUrl)
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   url.search = new URLSearchParams(params).toString()
//   return url.toString()
// }
//
// function formatUrl<BT> (url: string, params: BT): string {
//   const fullUrl = `${baseUrl}/${url}`
//   if (!params) return fullUrl
//   else return formatParams<BT>(fullUrl, params)
// }

// Axios

export const http = async<RT, BT = undefined, PT = undefined> ({
  url,
  method = 'get',
  body, params
}: {
    url: string,
    method?: Method,
    body?: BT,
    params?: PT
}): Promise<ResponseInterface<RT>> => await axios({
  url: `${baseUrl}/${url}`,
  method,
  data: body,
  params
}).then((response) => {
  return {
    error: false,
    data: response.data
  }
}).catch((error) => {
  return {
    error: true,
    message: error?.response?.message || error?.message || 'General error'
  }
})

export const initialResponse = {
  error: false,
  data: null
}

export const timeout = (ms = 5000): unknown => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
