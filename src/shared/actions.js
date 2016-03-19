import fetch from 'isomorphic-fetch'
import cache from 'lscache'

export function toggleCurrency (currency) {
  return {
    type: 'TOGGLE_CURRENCY',
    currency
  }
}

export function loadData (usd, eur) {
  return {
    type: 'LOAD_DATA',
    usd,
    eur
  }
}

export function fetchData () {
  return dispatch => {
    const data = cache.get('rates')
    if (data) {
      return dispatch(loadData(data.usd, data.eur))
    } else {
      return fetch('https://crossorigin.me/https://meduza.io/api/v3/stock/all/')
        .then(response => {
          return response.json()
        })
        .then(({ usd, eur }) => {
          cache.set('rates', {usd: usd.current, eur: eur.current}, 60)
          return dispatch(loadData(usd.current, eur.current))
        })
    }
  }
}
