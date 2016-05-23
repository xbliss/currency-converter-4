import test from 'ava'
import configureMockStore from 'redux-mock-store'
import nock from 'nock'
import thunk from 'redux-thunk'
import * as actions from './actions'
import 'mock-local-storage'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

test.afterEach(() => {
  localStorage.clear()
})

test('toggle currency to usd', t => {
  const expected = {
    type: 'TOGGLE_CURRENCY',
    payload: 'USD'
  }
  t.deepEqual(actions.toggleCurrency('USD'), expected)
})

test('toggle currency to eur', t => {
  const expected = {
    type: 'TOGGLE_CURRENCY',
    payload: 'EUR'
  }
  t.deepEqual(actions.toggleCurrency('EUR'), expected)
})

test('toggle accuracy', t => {
  const expected = {
    type: 'TOGGLE_ACCURACY',
    payload: null
  }
  t.deepEqual(actions.toggleAccuracy(), expected)
})

test('fetch data success', async t => {
  nock('https://meduza.io/')
    .get('/api/v3/stock/all/')
    .reply(200, {
      usd: {
        current: 65.945
      },
      eur: {
        current: 75.945
      }
    })

  const store = mockStore({})
  const expectedActions = [
    { type: 'FETCH_REQUEST' },
    { type: 'FETCH_SUCCESS',
      payload: {
        usd: 65.945,
        eur: 75.945
      }
    }
  ]

  await store.dispatch(actions.fetchData())
  t.deepEqual(JSON.stringify(store.getActions()), JSON.stringify(expectedActions))
})

test('fetch data failure', async t => {
  nock('https://meduza.io/')
    .get('/api/v3/stock/all/')
    .reply(500, {})

  const store = mockStore({})
  const expectedActions = [
    { type: 'FETCH_REQUEST' },
    { type: 'FETCH_FAILURE' }
  ]

  await store.dispatch(actions.fetchData())
  t.deepEqual(JSON.stringify(store.getActions()), JSON.stringify(expectedActions))
})

test('get data from cache', async t => {
  global.window = { localStorage }
  localStorage.setItem('lscache-rates', JSON.stringify({ usd: 67, eur: 76 }))

  const store = mockStore({})
  const expectedActions = [
    {
      type: 'FETCH_SUCCESS',
      payload: {
        usd: 67,
        eur: 76
      }
    }
  ]

  await store.dispatch(actions.fetchData())
  const result = store.getActions()
  result[0].payload = JSON.parse(result[0].payload)
  t.deepEqual(JSON.stringify(result), JSON.stringify(expectedActions))
})
