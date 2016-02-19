import { h } from 'preact'
import Provider from './Provider'
import { changeCurrency, swapConverter } from '../actions'

export default class Switcher extends Provider {
  currencyClass (currency) {
    const active = () => this.state.currency === currency ? 'active' : ''
    return `${currency.toLowerCase()} ${active()}`.trim()
  }

  _changeCurrency (currency) {
    if (this.state.from === 'RUB') {
      swapConverter('RUB', currency)
    } else {
      swapConverter(currency, 'RUB')
    }
    changeCurrency(currency)
  }

  render () {
    return <div class="switcher">
      <div
        class={ this.currencyClass('USD') }
        onClick={ () => this._changeCurrency('USD') }>
        <i class="fa fa-usd"></i> USD
      </div>
      <div
        class={ this.currencyClass('EUR') }
        onClick={ () => this._changeCurrency('EUR') }>
        <i class="fa fa-eur"></i> EUR
      </div>
    </div>
  }
}
