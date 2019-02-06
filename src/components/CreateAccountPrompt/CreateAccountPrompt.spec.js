import React from 'react'
import CreateAccountPrompt from './CreateAccountPrompt'
import { shallow } from 'enzyme'

describe('CreateAccountPrompt', () => {
  let setLoginPromptMock
  let setPopupMock
  let wrapper

  beforeEach(() => {
    window.fetch = jest.fn()
    setLoginPromptMock = jest.fn()
    setPopupMock = jest.fn()
    wrapper = shallow(<CreateAccountPrompt
      setLoginPrompt={setLoginPromptMock}
      setPopup={setPopupMock}
    />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call setLoginPrompt when component mounts', () => {
    expect(setPopupMock).toHaveBeenCalledTimes(1)
  })

  it('should call setPopup and setLoginPrompt when clicked', () => {
    wrapper.find('button').simulate('click')
    expect(setPopupMock).toHaveBeenCalledTimes(2)
    expect(setLoginPromptMock).toHaveBeenCalledTimes(1)
  })

  it('should call setPopup and setLoginPrompt when clicked', () => {
    wrapper.find('Link').simulate('click')
    expect(setPopupMock).toHaveBeenCalledTimes(1)
  })
})