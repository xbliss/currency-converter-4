import fetch from 'isomorphic-fetch'

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
    return fetch('https://crossorigin.me/https://meduza.io/api/v3/stock/all/')
      .then(response => {
        return response.json()
      })
      .then(({ usd, eur }) => {
        return dispatch(loadData(usd.current, eur.current))
      })
  }
}
