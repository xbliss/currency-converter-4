import React, { Component } from 'react'
import css from 'react-css-modules'
import FaArrowLeft from 'react-icons/lib/fa/arrow-left'
import FaArrowRight from 'react-icons/lib/fa/arrow-right'
import styles from './Converter.sss'
import CurrencyIcon from './CurrencyIcon'

@css(styles)
export default class Converter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: 0
    }
  }

  handleChange (value) {
    if (!isNaN(value)) {
      this.setState({
        input: Number(value)
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
    }
    return this.reverseConvert()
  }

  reverseConvert () {
    const result = this.state.input / this.props[this.props.current.toLowerCase()]
    if ((result > 0) && (result < 1)) {
      return '< 1'
    }
    return result.toFixed(2)
  }

  render () {
    return (
      <div styleName='converter'>
        <CurrencyIcon
          currency={this.props.current}
          swap={this.props.swap}
          convertToRUB
        />
        <input
          autoFocus
          placeholder='0'
          styleName='input'
          onChange={e => this.handleChange(e.target.value)}
          onBlur={e => this.handleBlur(e.target)}
        />
        <div styleName='swap' onClick={() => this.handleClick()}>
          <FaArrowLeft styleName='left' />
          <FaArrowRight styleName='right' />
        </div>
        <input styleName='input' value={this.convert()} />
        <CurrencyIcon
          currency={this.props.current}
          swap={this.props.swap}
        />
      </div>
    )
  }
}
