import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Rate.sss'

@CSSModules(styles)
export default class Rate extends Component {
  static propTypes = {
    usd: React.PropTypes.number,
    loadData: React.PropTypes.func
  }

  componentDidMount () {
    this.props.loadData(70)
  }

  render () {
    return (
      <div styleName='rate'>
        { this.props.usd }
      </div>
    )
  }
}
