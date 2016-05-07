import React, { Component } from 'react'
import css from 'react-css-modules'
import Spinner from 'react-spinkit'
import FaRouble from 'react-icons/lib/fa/rouble'
import styles from './Rate.sss'

@css(styles)
export default class Rate extends Component {
  static propTypes = {
    accuracy: React.PropTypes.bool,
    toggleAccuracy: React.PropTypes.func,
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
      const value = this.props.accuracy ? this.props.value.toFixed(2) : Math.round(this.props.value)
      return <div onClick={() => this.props.toggleAccuracy()}>{value}<FaRouble styleName='rub' /></div>
    }

    return (
      <div styleName='rate'>
        {this.props.isFetching ? showSpinner() : showValue()}
      </div>
    )
  }
}
