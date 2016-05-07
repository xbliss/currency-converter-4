import { createAction } from 'redux-actions'
import fetch from 'isomorphic-fetch'
import cache from 'lscache'

export const toggleAccuracy = createAction('TOGGLE_ACCURACY')
export const toggleCurrency = createAction('TOGGLE_CURRENCY', currency => currency)
export const doSwap = createAction('SWAP')

const fetchRequest = createAction('FETCH_REQUEST')
const fetchSuccess = createAction('FETCH_SUCCESS')
const fetchFailure = createAction('FETCH_FAILURE')

export const fetchData = () => {
  return dispatch => {
    const data = cache.get('rates')
    if (data) {
      return dispatch(fetchSuccess(data))
    }
    dispatch(fetchRequest())
    return fetch('https://meduza.io/api/v3/stock/all/')
      .then(response => response.json())
      .then(({ usd, eur }) => {
        cache.set('rates', { usd: usd.current, eur: eur.current }, 60)
        return dispatch(fetchSuccess({ usd, eur }))
      })
      .catch(() => dispatch(fetchFailure()))
  }
}
