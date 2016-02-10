import fetch from 'isomorphic-fetch'

export const apiUrl = 'https://meduza.io/api/v3/stock/all/'
export const corsProxyUrl = 'https://crossorigin.me/'

export function getRequestUrl () {
  return corsProxyUrl + apiUrl
}

export default function _fetch () {
  const url = getRequestUrl()
  return fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response
      } else {
        throw new Error(response.statusText)
      }
    })
}
