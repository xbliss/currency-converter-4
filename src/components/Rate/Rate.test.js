import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Spinner from 'react-spinkit'
import Rate from './Rate'

test('show spinner if fetching', t => {
  const wrapper = shallow(<Rate isFetching />)
  t.true(wrapper.contains(<Spinner spinnerName='three-bounce' noFadeIn />))
})

test('not show spinner if not fetching', t => {
  const props = {
    accuracy: false,
    value: 70
  }
  const wrapper = shallow(<Rate {...props} />)
  t.false(wrapper.contains(<Spinner spinnerName='three-bounce' noFadeIn />))
})
