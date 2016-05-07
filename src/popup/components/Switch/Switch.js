import React, { Component } from 'react'
import css from 'react-css-modules'
import classnames from 'classnames'
import FaUsd from 'react-icons/lib/fa/dollar'
import FaEur from 'react-icons/lib/fa/eur'
import styles from './Switch.sss'

@css(styles)
export default class Switch extends Component {
  static propTypes = {
    current: React.PropTypes.string,
    toggleCurrency: React.PropTypes.func
  }

  render () {
    return (
      <div styleName='switch'>
        <div
          className={
            this.props.current === 'USD' ? classnames(styles.usd, styles.active) : classnames(styles.usd)
          }
          onClick={() => this.props.toggleCurrency('USD')}
        >
          <FaUsd /> USD
        </div>
        <div
          className={
            this.props.current === 'EUR' ? classnames(styles.eur, styles.active) : classnames(styles.eur)
          }
          onClick={() => this.props.toggleCurrency('EUR')}
        >
          <FaEur /> EUR
        </div>
      </div>
    )
  }
}
