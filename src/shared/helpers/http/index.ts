import axios, { Method } from 'axios'

export interface ServiceResponse {
  ok: boolean
  message?: string
  code?: number
  data?: any
}

export function http(path: string, method: Method = 'GET', data?: any) {
  return axios({ method, data, url: `${process.env.REACT_APP_MAIN_API}/${path}` })
}
