import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Switcher from '../Switcher/Switcher.js'
import Rate from '../Rate/Rate.js'
import Converter from '../Converter/Converter.js'
import { toggleCurrency, fetchData } from '../../../shared/actions'
import styles from './Popup.sss'

const mapStateToProps = (state) => {
  return {
    current: state.current,
    isFetching: state.isFetching,
    usd: state.usd,
    eur: state.eur
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleCurrency, fetchData }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
export default class App extends Component {
  static propTypes = {
    current: React.PropTypes.string,
    isFetching: React.PropTypes.bool,
    usd: React.PropTypes.number,
    eur: React.PropTypes.number,
    toggleCurrency: React.PropTypes.func,
    fetchData: React.PropTypes.func
  }

  render () {
    return (
      <div>
        <Switcher current={this.props.current} toggleCurrency={this.props.toggleCurrency} />
        <Rate isFetching={this.props.isFetching} fetchData={this.props.fetchData} value={this.props.current === 'USD' ? this.props.usd : this.props.eur} />
        <Converter current={this.props.current} usd={this.props.usd} eur={this.props.eur} />
      </div>
    )
  }
}
