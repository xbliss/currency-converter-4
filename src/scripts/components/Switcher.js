import { h } from 'preact'
import Provider from './Provider'
import { changeCurrency } from '../actions'

export default class Switcher extends Provider {
  currencyClass (currency) {
    const active = () => this.state.currency === currency ? 'active' : ''
    return `${currency.toLowerCase()} ${active()}`.trim()
  }

  render () {
    return <div class="switcher">
      <div
        class={ this.currencyClass('USD') }
        onClick={ () => changeCurrency('USD') }>
        <i class="fa fa-usd"></i> USD
      </div>
      <div
        class={ this.currencyClass('EUR') }
        onClick={ () => changeCurrency('EUR') }>
        <i class="fa fa-eur"></i> EUR
      </div>
    </div>
  }
}
