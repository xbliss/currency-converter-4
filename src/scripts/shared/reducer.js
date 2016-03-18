const initialState = {
  current: 'USD'
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CURRENCY':
      return { current: action.currency.toUpperCase() }
    default:
      return state
  }
}
