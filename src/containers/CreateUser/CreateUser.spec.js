import React from 'react'
import { shallow } from 'enzyme'
import CreateUser from './CreateUser'
import { postData } from '../../api'
jest.mock('../../api')

let wrapper
let setPopup = jest.fn()
it('should match the snapshot', () => {
  wrapper = shallow(<CreateUser setPopup={jest.fn()} />)
  expect(wrapper).toMatchSnapshot()
})

it('should call setPopup if the link is clicked', () => {
  wrapper = shallow(<CreateUser setPopup={setPopup} />)
  wrapper.find('Link').simulate('click')
  expect(setPopup).toHaveBeenCalled()
})


it('should set didPost to true when a submission is sent to form', async() => {
  wrapper = shallow(<CreateUser setPopup={jest.fn()} />)
  wrapper.instance().handleSubmit({ preventDefault: () => '' })
  await expect(postData).toHaveBeenCalledTimes(1)
  await expect(wrapper.state('didPost')).toEqual(true)
})
