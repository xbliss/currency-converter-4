export const initialState = {
  currency: 'USD',
  usd: 0,
  eur: 0,
  inputValue: 0,
  from: 'USD',
  to: 'RUB'
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_CURRENCY':
      return Object.assign({}, state, { currency: action.currency, from: action.currency })
    case 'LOAD_DATA':
      return Object.assign({}, state, { usd: action.usd, eur: action.eur })
    case 'CHANGE_INPUT_VALUE':
      return Object.assign({}, state, { inputValue: action.inputValue })
    case 'SWAP_CONVERTER':
      return Object.assign({}, state, { from: action._from, to: action._to})
    default:
      return state
  }
}
