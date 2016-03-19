import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import fetch from 'isomorphic-fetch'
import styles from './Rate.sss'

@CSSModules(styles)
export default class Rate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      usd: 0
    }
  }

  componentDidMount () {
    this.fetchRate()
    .then(res => {
      this.setState({
        usd: res.usd.current
      })
    })
  }

  fetchRate () {
    const apiUrl = 'https://meduza.io/api/v3/stock/all/'
    const corsProxyUrl = 'https://crossorigin.me/'
    const url = corsProxyUrl + apiUrl

    return fetch(url)
    .then(response => {
      return response.json()
    })
    .then(({ usd, eur }) => {
      return { usd, eur }
    })
  }

  render () {
    return (
      <div styleName='rate'>
        { this.state.usd }
      </div>
    )
  }
}
