import React, { Component } from 'react'
import css from 'react-css-modules'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Switch from '../Switch/Switch'
import Rate from '../Rate/Rate'
import Converter from '../Converter/Converter'
import { toggleCurrency, toggleAccuracy, fetchData, doSwap } from '../../../shared/actions'
import styles from './Popup.sss'

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
  return bindActionCreators({ toggleCurrency, toggleAccuracy, fetchData, doSwap }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
@css(styles)
export default class App extends Component {
  render () {
    return (
      <div>
        <Switch
          current={this.props.current}
          toggleCurrency={this.props.toggleCurrency}
        />
        <Rate
          toggleAccuracy={this.props.toggleAccuracy}
          isFetching={this.props.isFetching}
          fetchData={this.props.fetchData}
          accuracy={this.props.accuracy}
          value={this.props.current === 'USD' ? this.props.usd : this.props.eur}
        />
        <Converter
          current={this.props.current}
          usd={this.props.usd}
          eur={this.props.eur}
          accuracy={this.props.accuracy}
          doSwap={this.props.doSwap}
          swap={this.props.swap}
        />
      </div>
    )
  }
}
