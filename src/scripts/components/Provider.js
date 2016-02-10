import { h, Component } from 'preact'
import store from '../store'

export default class Provider extends Component {
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
