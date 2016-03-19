import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { Store } from 'react-chromex-redux'
import Popup from './components/Popup/Popup.js'
import reducer from '../shared/reducer'

// const store = new Store({
//   portName: 'rates'
// })

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render((
  <Provider store={store}>
    <Popup />
  </Provider>
), document.getElementById('popup'))
