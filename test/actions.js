import test from 'ava'
import * as actions from '../src/shared/actions'

test('toggle currency to usd', (t) => {
  const expected = {
    type: 'TOGGLE_CURRENCY',
    currency: 'USD'
  }
  t.same(actions.toggleCurrency('USD'), expected)
})

test('toggle currency to eur', (t) => {
  const expected = {
    type: 'TOGGLE_CURRENCY',
    currency: 'EUR'
  }
  t.same(actions.toggleCurrency('EUR'), expected)
})

test('toggle accuracy', (t) => {
  const expected = {
    type: 'TOGGLE_ACCURACY'
  }
  t.same(actions.toggleAccuracy(), expected)
})

test('request data', (t) => {
  const expected = {
    type: 'REQUEST_DATA'
  }
  t.same(actions.requestData(), expected)
})

test('load data', (t) => {
  const expected = {
    type: 'LOAD_DATA',
    usd: 33,
    eur: 45
  }
  t.same(actions.loadData(33, 45), expected)
})
