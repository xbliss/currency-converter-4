import { h, Component } from 'preact'
import Switcher from './Switcher'
import Currency from './Currency'
import Converter from './Converter'

export default class App extends Component {
  render () {
    return <div>
      <Switcher />
      <Currency />
      <Converter />
    </div>
  }
}
