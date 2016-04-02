const initialState = {
  isFetching: false,
  current: 'USD',
  accuracy: false,
  usd: 0,
  eur: 0
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CURRENCY':
      return { ...state, current: action.currency.toUpperCase() }
    case 'TOGGLE_ACCURACY':
      return { ...state, accuracy: !state.accuracy }
    case 'REQUEST_DATA':
      return { ...state, isFetching: true }
    case 'LOAD_DATA':
      return { ...state, usd: action.usd, eur: action.eur, isFetching: false }
    default:
      return state
  }
}
