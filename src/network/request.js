import { BASE_URL, TIME_OUT } from './config'
import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT
  })
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    return Promise.reject(err)
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    return Promise.reject(err)
  })

  return instance(config)
}