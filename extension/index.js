import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as statesReducer } from 'redux-state'
import Popup from '../src'

const reducer = combineReducers({
  states: statesReducer
})
const store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <Popup />
  </Provider>
), document.getElementById('popup'))
