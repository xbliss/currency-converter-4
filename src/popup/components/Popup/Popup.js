import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Switcher from '../Switcher/Switcher.js'
import Rate from '../Rate/Rate.js'
import styles from './Popup.sss'

@CSSModules(styles)
export default class App extends Component {
  render () {
    return (
      <div>
        <Switcher />
        <Rate />
      </div>
    )
  }
}
