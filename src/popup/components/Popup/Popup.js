import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Switcher from '../Switcher/Switcher.js'
import Rate from '../Rate/Rate.js'
import { toggleCurrency, loadData, fetchData } from '../../../shared/actions'
import styles from './Popup.sss'

const mapStateToProps = (state) => {
  return {
    current: state.current,
    usd: state.usd
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleCurrency, loadData, fetchData }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
export default class App extends Component {
  static propTypes = {
    current: React.PropTypes.string,
    usd: React.PropTypes.number,
    loadData: React.PropTypes.func,
    toggleCurrency: React.PropTypes.func,
    fetchData: React.PropTypes.func
  }

  render () {
    return (
      <div>
        <Switcher current={ this.props.current } toggleCurrency={ this.props.toggleCurrency } />
        <Rate fetchData={ this.props.fetchData } loadData={ this.props.loadData } usd={ this.props.usd } />
      </div>
    )
  }
}
