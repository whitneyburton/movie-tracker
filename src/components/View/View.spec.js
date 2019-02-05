import React from 'react'
import { shallow } from 'enzyme'
import {Route} from 'react-router-dom'
import View from './View'
it('should pass', () => {
  let wrapper = shallow(<View />)

  expect(wrapper).toMatchSnapshot()
})

it('should pass', () => {
  let wrapper = shallow(<View />)
  expect(wrapper.find(Route).length).toEqual(3)
})