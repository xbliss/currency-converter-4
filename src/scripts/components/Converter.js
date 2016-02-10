import { h } from 'preact'
import Provider from './Provider'
import { changeInputValue, swapConverter } from '../actions'

export default class Converter extends Provider {
  convert () {
    const currencyRate = this.state[this.state.currency.toLowerCase()]
    if (this.state.to === 'RUB') {
      return Math.round(this.state.inputValue * currencyRate)
    } else {
      return Math.round(this.state.inputValue / currencyRate)
    }
  }

  changeConvertSide () {
    const _from = this.state.from
    const _to = this.state.to
    if (_from !== 'RUB') {
      swapConverter('RUB', _from)
    } else if (_from === 'RUB') {
      swapConverter(_to, 'RUB')
    }
  }

  render () {
    const fromInputClass = `from ${this.state.from.toLowerCase()}`
    const toInputClass = `to ${this.state.to.toLowerCase()}`
    return (
      <div class="converter">
        <div class={fromInputClass}>
          <input type="text"
            onInput={ e => changeInputValue(e.target.value) }
            value={this.state.inputValue}
            placeholder="0"
            autofocus />
        </div>
        <div class="swap" onClick={ e => this.changeConvertSide() }>
          <i class="fa fa-long-arrow-left"></i>
          <i class="fa fa-long-arrow-right"></i>
        </div>
        <div class={toInputClass}>
          <input type="text"
            value={ this.convert() }
            placeholder="0"
            readonly />
        </div>
      </div>
    )
  }
}
