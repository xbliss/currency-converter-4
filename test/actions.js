import test from 'ava'
import * as actions from '../src/shared/actions'

test('toggle currency to usd', t => {
  const expected = {
    type: 'TOGGLE_CURRENCY',
    payload: {
      currency: 'USD'
    }
  }
  t.deepEqual(actions.toggleCurrency('USD'), expected)
})

test('toggle currency to eur', t => {
  const expected = {
    type: 'TOGGLE_CURRENCY',
    payload: {
      currency: 'EUR'
    }
  }
  t.deepEqual(actions.toggleCurrency('EUR'), expected)
})

test('toggle accuracy', t => {
  const expected = {
    type: 'TOGGLE_ACCURACY'
  }
  t.deepEqual(actions.toggleAccuracy(), expected)
})

test('request data', t => {
  const expected = {
    type: 'REQUEST_DATA'
  }
  t.deepEqual(actions.requestData(), expected)
})

test('load data', t => {
  const expected = {
    type: 'LOAD_DATA',
    payload: {
      usd: 33,
      eur: 45
    }
  }
  t.deepEqual(actions.loadData(33, 45), expected)
})
