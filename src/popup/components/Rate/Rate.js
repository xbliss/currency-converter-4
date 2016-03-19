import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Spinner from 'react-spinkit'
import styles from './Rate.sss'

@CSSModules(styles)
export default class Rate extends Component {
  static propTypes = {
    isFetching: React.PropTypes.bool,
    value: React.PropTypes.number,
    fetchData: React.PropTypes.func
  }

  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    return (
      <div styleName='rate'>
        { this.props.isFetching
          ? <Spinner spinnerName='three-bounce' noFadeIn />
          : `${Math.round(this.props.value)} ₽`
        }
      </div>
    )
  }
}
