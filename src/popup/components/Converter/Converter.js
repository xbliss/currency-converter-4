import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import FaArrowLeft from 'react-icons/lib/fa/arrow-left'
import FaArrowRight from'react-icons/lib/fa/arrow-right'
import { isNaN, toNumber } from 'lodash'
import styles from './Converter.sss'

@CSSModules(styles)
export default class Converter extends Component {
  static propTypes = {
    usd: React.PropTypes.number,
    eur: React.PropTypes.number,
    current: React.PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      input: 0
    }
  }

  changeInput (value) {
    if (!isNaN(toNumber(value))) {
      this.setState({
        input: toNumber(value)
      })
    }
  }

  convert () {
    if (this.props.current === 'USD') {
      return this.state.input * this.props.usd
    } else if (this.props.current === 'EUR') {
      return this.state.input * this.props.eur
    } else {
      return this.state.input
    }
  }

  render () {
    return (
      <div styleName='converter'>
        <input styleName='input' onChange={ (e) => this.changeInput(e.target.value) } />
        <div styleName='swap'>
          <FaArrowLeft styleName='left' />
          <FaArrowRight styleName='right' />
        </div>
        <input styleName='input' value={ Math.round(this.convert()) } />
      </div>
    )
  }
}
