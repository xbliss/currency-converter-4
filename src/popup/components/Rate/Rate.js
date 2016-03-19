import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Rate.sss'

@CSSModules(styles)
export default class Rate extends Component {
  static propTypes = {
    value: React.PropTypes.number,
    fetchData: React.PropTypes.func
  }

  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    return (
      <div styleName='rate'>
        { Math.round(this.props.value) } ₽
      </div>
    )
  }
}
