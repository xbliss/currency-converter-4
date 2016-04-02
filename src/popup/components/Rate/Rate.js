import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Spinner from 'react-spinkit'
import FaRouble from 'react-icons/lib/fa/rouble'
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
    const showSpinner = () => <Spinner spinnerName='three-bounce' noFadeIn />
    const showValue = () => {
      return <div>{Math.round(this.props.value)}<FaRouble styleName='rub' /></div>
    }

    return (
      <div styleName='rate'>
        {this.props.isFetching ? showSpinner() : showValue()}
      </div>
    )
  }
}
