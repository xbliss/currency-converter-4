import React from 'react'
import css from 'react-css-modules'
import { bindActionCreators } from 'redux'
import { connectState } from 'redux-state'
import compose from 'recompose/compose'
import Switch from '../Switch/Switch'
import Rate from '../Rate/Rate'
import Converter from '../Converter/Converter'
import { toggleCurrency, toggleAccuracy, fetchData, doSwap } from '../../actions'
import reducer from '../../reducer'
import styles from './Popup.css'

const mapStateToProps = state => {
  return {
    current: state.current,
    accuracy: state.accuracy,
    isFetching: state.isFetching,
    usd: state.usd,
    eur: state.eur,
    swap: state.swap
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleCurrency,
    toggleAccuracy,
    fetchData,
    doSwap
  }, dispatch)
}

const Popup = props => {
  return (
    <div>
      <Switch
        current={props.current}
        toggleCurrency={props.toggleCurrency}
      />
      <Rate
        toggleAccuracy={props.toggleAccuracy}
        isFetching={props.isFetching}
        fetchData={props.fetchData}
        accuracy={props.accuracy}
        value={props.current === 'USD' ? props.usd : props.eur}
      />
      <Converter
        current={props.current}
        usd={props.usd}
        eur={props.eur}
        accuracy={props.accuracy}
        doSwap={props.doSwap}
        swap={props.swap}
      />
    </div>
  )
}

const enhance = compose(
  connectState(mapStateToProps, mapDispatchToProps, undefined, reducer),
  css(styles)
)

export default enhance(Popup)
