import React from 'react'
import css from 'react-css-modules'
import classnames from 'classnames'
import FaUsd from 'react-icons/lib/fa/dollar'
import FaEur from 'react-icons/lib/fa/eur'
import styles from './Switch.css'

const Switch = props => {
  return (
    <div styleName='switch'>
      <div
        className={
          props.current === 'USD' ? classnames(styles.usd, styles.active) : classnames(styles.usd)
        }
        onClick={() => props.toggleCurrency('USD')}
      >
        <FaUsd /> USD
      </div>
      <div
        className={
          props.current === 'EUR' ? classnames(styles.eur, styles.active) : classnames(styles.eur)
        }
        onClick={() => props.toggleCurrency('EUR')}
      >
        <FaEur /> EUR
      </div>
    </div>
  )
}

export default css(styles)(Switch)
