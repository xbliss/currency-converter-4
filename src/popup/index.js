import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'react-chromex-redux'
import Popup from './components/Popup/Popup.js'

const store = new Store({
  portName: 'rates'
})

ReactDOM.render((
  <Provider store={store}>
    <Popup />
  </Provider>
), document.getElementById('popup'))
