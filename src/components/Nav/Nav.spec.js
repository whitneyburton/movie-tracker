import React from 'react'
import { shallow } from 'enzyme'
import Nav from './Nav'

let wrapper = shallow(<Nav/>)
it('it should match the snapshot', () => {
  expect(wrapper).toMatchSnapshot()
})