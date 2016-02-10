import { createStore } from 'redux'
import reducer, { initialState } from './reducer'

export default createStore(reducer, initialState)
