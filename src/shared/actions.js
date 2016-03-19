// import fetch from 'isomorphic-fetch'

export function toggleCurrency (currency) {
  return {
    type: 'TOGGLE_CURRENCY',
    currency
  }
}

export function loadData (usd) {
  return {
    type: 'LOAD_DATA',
    usd
  }
}

// export function fetchData () {
//   return dispatch => {
//     fetch('https://crossorigin.me/https://meduza.io/api/v3/stock/all/')
//       .then(response => {
//         return response.json()
//       })
//       .then(({ usd, eur }) => {
//         dispatch(loadData(usd))
//       })
//   }
// }
