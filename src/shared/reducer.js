const initialState = {
  current: 'USD',
  usd: 0,
  eur: 0
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CURRENCY':
      return { ...state, current: action.currency.toUpperCase() }
    case 'LOAD_DATA':
      return { ...state, usd: action.usd, eur: action.eur }
    default:
      return state
  }
}
