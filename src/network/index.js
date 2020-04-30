import { request } from './request'

export function getHomeResource() {
  return request({
    url: '/index.json'
  })
}

