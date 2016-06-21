import React from 'react'
import css from 'react-css-modules'
import lifecycle from 'recompose/lifecycle'
import compose from 'recompose/compose'
import Spinner from 'react-spinkit'
import FaRouble from 'react-icons/lib/fa/rouble'
import styles from './Rate.css'

const Rate = props => {
  const showSpinner = () => <Spinner spinnerName='three-bounce' noFadeIn />
  const showValue = () => {
    const value = props.accuracy ? props.value.toFixed(2) : Math.round(props.value)
    return (
      <div onClick={() => props.toggleAccuracy()}>
        {value}
        <FaRouble styleName='rub' />
      </div>
    )
  }

  return (
    <div styleName='rate'>
      {props.isFetching ? showSpinner() : showValue()}
    </div>
  )
}

const enchance = compose(
  lifecycle({
    componentDidMount () {
      this.props.fetchData()
    }
  }),
  css(styles)
)
export default enchance(Rate)
