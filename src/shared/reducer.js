const initialState = {
  current: 'USD',
  usd: 0
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CURRENCY':
      return Object.assign({}, state, { current: action.currency.toUpperCase() })
    case 'LOAD_DATA':
      return Object.assign({}, state, { usd: action.usd })
    default:
      return state
  }
}
