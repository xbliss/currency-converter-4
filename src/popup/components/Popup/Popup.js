import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Switcher from '../Switcher/Switcher.js'
import styles from './Popup.sss'

@CSSModules(styles)
export default class App extends Component {
  render () {
    return (
      <div>
        <Switcher />
      </div>
    )
  }
}
