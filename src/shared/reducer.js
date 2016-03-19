const initialState = {
  isFetching: false,
  current: 'USD',
  usd: 0,
  eur: 0
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CURRENCY':
      return { ...state, current: action.currency.toUpperCase() }
    case 'REQUEST_DATA':
      return { ...state, isFetching: true }
    case 'LOAD_DATA':
      return { ...state, usd: action.usd, eur: action.eur, isFetching: false }
    default:
      return state
  }
}
