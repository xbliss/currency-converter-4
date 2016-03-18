import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { bindActionCreators } from 'redux'
import FaUsd from 'react-icons/lib/fa/dollar'
import FaEur from 'react-icons/lib/fa/eur'
import * as Actions from '../../../shared/actions'
import styles from './Switcher.sss'

const mapStateToProps = (state) => {
  return {
    current: state.current
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
export default class Switcher extends Component {
  static propTypes = {
    current: React.PropTypes.string,
    toggleCurrency: React.PropTypes.func
  }

  render () {
    return (
      <div styleName='switcher'>
        <div styleName='usd' onClick={ () => this.props.toggleCurrency('USD') }>
          <FaUsd />
        </div>
        <div styleName='eur' onClick={ () => this.props.toggleCurrency('EUR') }>
          <FaEur />
        </div>
      </div>
    )
  }
}
