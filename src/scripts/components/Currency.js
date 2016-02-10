import { h } from 'preact'
import Provider from './Provider'

export default class Currency extends Provider {
  value () {
    return Math.round(
      this.state.currency === 'USD' ? this.state.usd : this.state.eur
    )
  }

  render () {
    return <div class="currency">
      { this.value() }
      <i class="fa fa-rub"></i>
    </div>
  }
}
