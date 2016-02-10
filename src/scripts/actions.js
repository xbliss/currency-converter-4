import store from './store'

export function changeCurrency (currency) {
  store.dispatch({
    type: 'CHANGE_CURRENCY',
    currency
  })
}

export function loadData (usd, eur) {
  store.dispatch({
    type: 'LOAD_DATA',
    usd,
    eur
  })
}

export function changeInputValue (inputValue) {
  store.dispatch({
    type: 'CHANGE_INPUT_VALUE',
    inputValue
  })
}

export function swapConverter (_from, _to) {
  store.dispatch({
    type: 'SWAP_CONVERTER',
    _from,
    _to
  })
}
