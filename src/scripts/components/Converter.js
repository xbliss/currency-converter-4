import { h } from 'preact'
import Provider from './Provider'
import { changeInputValue, swapConverter } from '../actions'

export default class Converter extends Provider {
  convert () {
    if (this.state.inputValue || this.state.inputValue === 0) {
      const currencyRate = this.state[this.state.currency.toLowerCase()]
      if (this.state.to === 'RUB') {
        const result = Math.round(this.state.inputValue * currencyRate)
        return isNaN(Math.abs(result)) ? 0 : result
      } else {
        const result = this.state.inputValue / currencyRate
        return isNaN(Math.abs(result)) ? 0 : result.toFixed(1).replace(/^(\d+\.\d)$/,'$10')
      }
    } else {
      return ''
    }
  }

  changeConvertSide () {
    swapConverter(this.state.to, this.state.from)
  }

  render () {
    const fromInputClass = `from ${this.state.from.toLowerCase()}`
    const toInputClass = `to ${this.state.to.toLowerCase()}`
    return (
      <div class="converter">
        <div class={ fromInputClass }>
          <input type="text"
            onInput={ e => changeInputValue(e.target.value) }
            value={ this.state.inputValue }
            placeholder="0"
            autofocus />
        </div>
        <div class="swap" onClick={ e => this.changeConvertSide() }>
          <i class="fa fa-long-arrow-left"></i>
          <i class="fa fa-long-arrow-right"></i>
        </div>
        <div class={ toInputClass }>
          <input type="text"
            value={ this.convert() }
            placeholder="0"
            readonly />
        </div>
      </div>
    )
  }
}
