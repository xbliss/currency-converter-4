import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Switch from '../Switch/Switch.js'
import Rate from '../Rate/Rate.js'
import Converter from '../Converter/Converter.js'
import { toggleCurrency, toggleAccuracy, fetchData } from '../../../shared/actions'
import styles from './Popup.sss'

const mapStateToProps = (state) => {
  return {
    current: state.current,
    accuracy: state.accuracy,
    isFetching: state.isFetching,
    usd: state.usd,
    eur: state.eur
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleCurrency, toggleAccuracy, fetchData }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
export default class App extends Component {
  static propTypes = {
    current: React.PropTypes.string,
    accuracy: React.PropTypes.bool,
    isFetching: React.PropTypes.bool,
    usd: React.PropTypes.number,
    eur: React.PropTypes.number,
    toggleCurrency: React.PropTypes.func,
    fetchData: React.PropTypes.func
  }

  render () {
    return (
      <div>
        <Switch current={this.props.current} toggleCurrency={this.props.toggleCurrency} />
        <Rate toggleAccuracy={this.props.toggleAccuracy} isFetching={this.props.isFetching} fetchData={this.props.fetchData} accuracy={this.props.accuracy} value={this.props.current === 'USD' ? this.props.usd : this.props.eur} />
        <Converter current={this.props.current} usd={this.props.usd} eur={this.props.eur} />
      </div>
    )
  }
}
