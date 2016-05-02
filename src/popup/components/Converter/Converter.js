import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import FaArrowLeft from 'react-icons/lib/fa/arrow-left'
import FaArrowRight from 'react-icons/lib/fa/arrow-right'
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
      return this.state.input * rate
    } else {
      return this.state.input / rate
    }
  }

  render () {
    const value = () => this.props.accuracy ? this.convert().toFixed(2) : Math.round(this.convert())
    return (
      <div styleName='converter'>
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
        <input styleName='input' value={value()} />
      </div>
    )
  }
}
