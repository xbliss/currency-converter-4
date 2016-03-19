import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import { Store } from 'react-chromex-redux'
import Popup from './components/Popup/Popup.js'
import reducer from '../shared/reducer'

// const store = new Store({
//   portName: 'rates'
// })

const store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <Popup />
  </Provider>
), document.getElementById('popup'))
