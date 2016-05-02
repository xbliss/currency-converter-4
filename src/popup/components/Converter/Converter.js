import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import FaArrowLeft from 'react-icons/lib/fa/arrow-left'
import FaArrowRight from 'react-icons/lib/fa/arrow-right'
import FaUsd from 'react-icons/lib/fa/dollar'
import FaEur from 'react-icons/lib/fa/eur'
import FaRouble from 'react-icons/lib/fa/rouble'
import { isNaN, toNumber } from 'lodash'
import styles from './Converter.sss'

@CSSModules(styles)
export default class Converter extends Component {
  static propTypes = {
    usd: React.PropTypes.number,
    eur: React.PropTypes.number,
    current: React.PropTypes.string,
    accuracy: React.PropTypes.bool
  }

  constructor (props) {
    super(props)
    this.state = {
      input: 0
    }
  }

  handleChange (value) {
    if (!isNaN(toNumber(value))) {
      this.setState({
        input: toNumber(value)
      })
    }
  }

  handleBlur (target) {
    setTimeout(() => {
      target.focus()
    }, 0)
  }

  handleClick () {
    this.props.doSwap()
  }

  convert () {
    const rate = this.props[this.props.current.toLowerCase()]
    if (!this.props.swap) {
      const result = this.state.input * rate
      return this.props.accuracy ? result.toFixed(2) : Math.round(result)
    } else {
      return this.reverseConvert()
    }
  }

  reverseConvert () {
    const result = this.state.input / this.props[this.props.current.toLowerCase()]
    if ((result > 0) && (result < 1)) {
      return '< 1'
    }
    return result.toFixed(2)
  }

  render () {
    const currentIcon = this.props.current === 'USD' ? <FaUsd /> : <FaEur />
    return (
      <div styleName='converter'>
        <div styleName='icon'>
          {!this.props.swap ? currentIcon : <FaRouble />}
        </div>
        <input
          autoFocus
          placeholder='0'
          styleName='input'
          onChange={(e) => this.handleChange(e.target.value)}
          onBlur={(e) => this.handleBlur(e.target)}
        />
        <div styleName='swap' onClick={(e) => this.handleClick()}>
          <FaArrowLeft styleName='left' />
          <FaArrowRight styleName='right' />
        </div>
        <input styleName='input' value={this.convert()} />
        <div styleName='icon'>
          {this.props.swap ? currentIcon : <FaRouble />}
        </div>
      </div>
    )
  }
}
