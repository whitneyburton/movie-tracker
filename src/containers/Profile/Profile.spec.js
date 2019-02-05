import React from 'react'
import { shallow } from 'enzyme'
import { Profile } from './Profile'

it('should pass a test', () => {
  let wrapper = shallow(<Profile user={{ name: 'J', id: 27 }} />)
  expect(wrapper).toMatchSnapshot()
})