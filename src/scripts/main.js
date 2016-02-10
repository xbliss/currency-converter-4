import { h, render } from 'preact'
import App from './components/App'
import cache from 'lscache'
import { loadData } from './actions'
import _fetch from './api'

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

fetchStock()
render(<App />, document.getElementById('app'))
