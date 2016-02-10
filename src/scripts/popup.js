/*eslint no-unused-vars: 0*/
import { h, render, Component } from 'preact'
import { createStore } from 'redux'
import cache from 'lscache'
import _fetch from './api'

// Fetch
function fetchStock () {
  const data = cache.get('stock')

  if (data) {
    loadData(data.usd, data.eur)
  } else {
    _fetch()
      .then(response => response.json())
      .then(({ usd, eur }) => {
        loadData(usd.current, eur.current)
        cache.set('stock', {usd: usd.current, eur: eur.current}, 180)
      })
  }
}

// Actions
function changeCurrency (currency) {
  store.dispatch({
    type: 'CHANGE_CURRENCY',
    currency
  })
}

function loadData (usd, eur) {
  store.dispatch({
    type: 'LOAD_DATA',
    usd,
    eur
  })
}

function changeInputValue (inputValue) {
  store.dispatch({
    type: 'CHANGE_INPUT_VALUE',
    inputValue
  })
}

// State
const initialState = {
  currency: 'USD',
  usd: 0,
  eur: 0,
  inputValue: 0
}

// Reducer
function reducer (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_CURRENCY':
      return Object.assign({}, state, { currency: action.currency })
    case 'LOAD_DATA':
      return Object.assign({}, state, { usd: action.usd, eur: action.eur })
    case 'CHANGE_INPUT_VALUE':
      return Object.assign({}, state, { inputValue: action.inputValue })
    default:
      return state
  }
}

// Store
const store = createStore(reducer)

class Provider extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount () {
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }
}

class Switcher extends Provider {
  currencyClass (currency) {
    const active = () => {
      return this.state.currency === currency ? 'active' : ''
    }
    return `${currency.toLowerCase()} ${active()}`.trim()
  }

  render () {
    return <div class="switcher">
      <div
        onClick={ e => changeCurrency('USD') }
        class={ this.currencyClass('USD') }>
        <i class="fa fa-usd"></i> USD
      </div>
      <div
        onClick={ e => changeCurrency('EUR') }
        class={ this.currencyClass('EUR') }>
        <i class="fa fa-eur"></i> EUR
      </div>
    </div>
  }
}

class Currency extends Provider {
  render () {
    const value = this.state.currency === 'USD' ? this.state.usd : this.state.eur
    return <div class="currency">
      { Math.round(value) }
      <i class="fa fa-rub"></i>
    </div>
  }
}

class Converter extends Provider {
  changeConvertSide (e) {
  }

  convert () {
    const currencyRate = this.state[this.state.currency.toLowerCase()]
    return Math.round(this.state.inputValue * currencyRate)
  }

  render () {
    const fromInputClass = `from ${this.state.currency.toLowerCase()}`
    const toInputClass = `to ${this.state.currency.toLowerCase()}`
    return (
      <div class="converter">
        <div class={fromInputClass}>
          <input type="text"
            onInput={ e => changeInputValue(e.target.value) }
            value={this.state.inputValue}
            autofocus />
        </div>
        <div class="switch" onClick={ e => this.changeConvertSide(e) }>
          <i class="fa fa-long-arrow-left"></i>
          <i class="fa fa-long-arrow-right"></i>
        </div>
        <div class="to rub">
          <input type="text" value={ this.convert() } readonly />
        </div>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return <div>
      <Switcher />
      <Currency />
      <Converter />
    </div>
  }
}

fetchStock()
render(<App />, document.getElementById('app'))
