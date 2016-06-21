import React from 'react'
import css from 'react-css-modules'
import withState from 'recompose/withState'
import compose from 'recompose/compose'
import FaArrowLeft from 'react-icons/lib/fa/arrow-left'
import FaArrowRight from 'react-icons/lib/fa/arrow-right'
import styles from './Converter.css'
import CurrencyIcon from './CurrencyIcon'

const Converter = props => {
  const handleBlur = target => {
    setTimeout(() => {
      target.focus()
    }, 0)
  }

  const handleChange = value => {
    props.setInput(() => {
      return Number(value)
    })
  }

  const handleClick = () => props.doSwap()

  const convert = () => {
    const result = () => {
      return props.swap ?
      props.input / props[props.current.toLowerCase()] :
      props.input * props[props.current.toLowerCase()]
    }
    const accuracy = value => {
      return props.accuracy ? value.toFixed(2) : Math.round(value)
    }
    return props.accuracy ? result() : accuracy(result())
  }

  return (
    <div styleName='converter'>
      <CurrencyIcon
        currency={props.current}
        swap={props.swap}
        convertToRUB
      />
      <input
        autoFocus
        placeholder='0'
        styleName='input'
        onChange={e => handleChange(e.target.value)}
        onBlur={e => handleBlur(e.target)}
      />
      <div styleName='swap' onClick={() => handleClick()}>
        <FaArrowLeft styleName='left' />
        <FaArrowRight styleName='right' />
      </div>
      <input styleName='input' value={convert()} />
      <CurrencyIcon
        currency={props.current}
        swap={props.swap}
      />
    </div>
  )
}

const enhance = compose(
  withState('input', 'setInput', 0),
  css(styles)
)

export default enhance(Converter)
