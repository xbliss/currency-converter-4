import test from 'ava'
import reducer from '../src/shared/reducer'

const initialState = {
  isFetching: false,
  current: 'USD',
  accuracy: false,
  usd: 0,
  eur: 0,
  swap: false
}

test('return the initial state', t => {
  t.deepEqual(reducer(undefined, {}), initialState)
})

test('toggle currency to USD', t => {
  const action = {
    type: 'TOGGLE_CURRENCY',
    payload: 'USD'
  }
  const expected = {
    isFetching: false,
    current: 'USD',
    accuracy: false,
    usd: 0,
    eur: 0,
    swap: false
  }
  t.deepEqual(reducer(initialState, action), expected)
})

test('toggle currency to EUR', t => {
  const action = {
    type: 'TOGGLE_CURRENCY',
    payload: 'EUR'
  }
  const expected = {
    isFetching: false,
    current: 'EUR',
    accuracy: false,
    usd: 0,
    eur: 0,
    swap: false
  }
  t.deepEqual(reducer(initialState, action), expected)
})

test('toggle accuracy', t => {
  const action = {
    type: 'TOGGLE_ACCURACY'
  }
  const expected = {
    isFetching: false,
    current: 'USD',
    accuracy: true,
    usd: 0,
    eur: 0,
    swap: false
  }
  t.deepEqual(reducer(initialState, action), expected)
})

test('fetch request', t => {
  const action = {
    type: 'FETCH_REQUEST'
  }
  const expected = {
    isFetching: true,
    current: 'USD',
    accuracy: false,
    usd: 0,
    eur: 0,
    swap: false
  }
  t.deepEqual(reducer(initialState, action), expected)
})

test('fetch success', t => {
  const action = {
    type: 'FETCH_SUCCESS',
    payload: {
      usd: {
        current: 65.945
      },
      eur: {
        current: 75.945
      }
    }
  }
  const expected = {
    isFetching: false,
    current: 'USD',
    accuracy: false,
    usd: 65.945,
    eur: 75.945,
    swap: false
  }
  t.deepEqual(reducer(initialState, action), expected)
})

test('swap', t => {
  const action = {
    type: 'SWAP'
  }
  const expected = {
    isFetching: false,
    current: 'USD',
    accuracy: false,
    usd: 0,
    eur: 0,
    swap: true
  }
  t.deepEqual(reducer(initialState, action), expected)
})
