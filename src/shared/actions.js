import fetch from 'isomorphic-fetch'
import cache from 'lscache'

export function toggleCurrency (currency) {
  return {
    type: 'TOGGLE_CURRENCY',
    currency
  }
}

export function requestData () {
  return {
    type: 'REQUEST_DATA'
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
  return (dispatch) => {
    const data = cache.get('rates')
    if (data) {
      return dispatch(loadData(data.usd, data.eur))
    } else {
      dispatch(requestData())
      return fetch('https://crossorigin.me/https://meduza.io/api/v3/stock/all/')
        .then((response) => {
          return response.json()
        })
        .then(({ usd, eur }) => {
          cache.set('rates', {usd: usd.current, eur: eur.current}, 60)
          cache.set('latest', {usd: usd.current, eur: eur.current})
          return dispatch(loadData(usd.current, eur.current))
        })
        .catch((e) => {
          const {usd, eur} = cache.get('latest')
          return dispatch(loadData(usd, eur))
        })
    }
  }
}
