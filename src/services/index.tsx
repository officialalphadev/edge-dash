import axios from 'axios'

export * from './auth'
export * from './users'
export * from './roles'
export * from './portfolios'
export * from './profiles'
export * from './activities'
export * from './subscribers'
export * from './medias'
export * from './flashsale'
export * from './faqs'

export type TypeToken = string

export const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          sessionStorage.getItem('token') || 'null'
        )}`,
      },
    })
    .then((res) => res.data)
