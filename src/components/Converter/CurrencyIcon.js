import React from 'react'
import css from 'react-css-modules'
import FaUsd from 'react-icons/lib/fa/dollar'
import FaEur from 'react-icons/lib/fa/eur'
import FaRouble from 'react-icons/lib/fa/rouble'
import styles from './CurrencyIcon.css'

const currencies = {
  'USD': <FaUsd />,
  'EUR': <FaEur />,
  'RUB': <FaRouble />
}

const CurrencyIcon = ({ currency, swap, convertToRUB }) => {
  const icon = ((convertToRUB && !swap) || (!convertToRUB && swap)) ?
  currencies[currency] : currencies.RUB

  return <div styleName='icon'>{icon}</div>
}

export default css(CurrencyIcon, styles)
