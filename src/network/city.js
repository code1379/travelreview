import { request } from './request'

export function getCityResource() {
  return request({
    url: '/city.json'
  })
}

