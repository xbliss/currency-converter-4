import { wrapStore } from 'react-chromex-redux'
import { createStore } from 'redux'
import reducer from '../shared/reducer'

const store = createStore(reducer)

wrapStore(store, { portName: 'rates' })
