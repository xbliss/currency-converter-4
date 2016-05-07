const initialState = {
  isFetching: false,
  current: 'USD',
  accuracy: false,
  usd: 0,
  eur: 0,
  swap: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CURRENCY':
      return { ...state, current: action.payload }
    case 'TOGGLE_ACCURACY':
      return { ...state, accuracy: !state.accuracy }
    case 'FETCH_REQUEST':
      return { ...state, isFetching: true }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        usd: action.payload.usd.current,
        eur: action.payload.eur.current,
        isFetching: false
      }
    case 'SWAP':
      return { ...state, swap: !state.swap }
    default:
      return state
  }
}
