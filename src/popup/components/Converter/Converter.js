import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import FaArrowLeft from 'react-icons/lib/fa/arrow-left'
import FaArrowRight from'react-icons/lib/fa/arrow-right'
import styles from './Converter.sss'

@CSSModules(styles)
export default class Converter extends Component {
  render () {
    return (
      <div styleName='converter'>
        <input styleName='input' />
        <div styleName='swap'>
          <FaArrowLeft styleName='left' />
          <FaArrowRight styleName='right' />
        </div>
        <input styleName='input' />
      </div>
    )
  }
}
