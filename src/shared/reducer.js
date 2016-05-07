import { handleActions } from 'redux-actions'

const initialState = {
  isFetching: false,
  current: 'USD',
  accuracy: false,
  usd: 0,
  eur: 0,
  swap: false
}

const reducer = handleActions({
  'TOGGLE_CURRENCY': (state, action) => ({ ...state, current: action.payload }),
  'TOGGLE_ACCURACY': state => ({ ...state, accuracy: !state.accuracy }),
  'FETCH_REQUEST': state => ({ ...state, isFetching: true }),
  'FETCH_SUCCESS': (state, action) => ({
    ...state,
    usd: action.payload.usd.current,
    eur: action.payload.eur.current,
    isFetching: false
  }),
  'SWAP': state => ({ ...state, swap: !state.swap })
}, initialState)

export default reducer
