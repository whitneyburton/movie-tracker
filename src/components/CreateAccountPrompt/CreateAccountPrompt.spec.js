import React from 'react'
import CreateAccountPrompt from './CreateAccountPrompt'
import { shallow } from 'enzyme'

describe('CreateAccountPrompt', () => {
  let setShouldPromptLoginMock
  let setPopupMock
  let wrapper
  beforeEach(() => {
    window.fetch = jest.fn()
    setShouldPromptLoginMock = jest.fn()
    setPopupMock = jest.fn()
    wrapper = shallow(<CreateAccountPrompt
      setShouldPromptLogin={setShouldPromptLoginMock}
      setPopup={setPopupMock}
    />)
  })



  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call setShouldPromptLogin when component mounts', () => {
    expect(setPopupMock).toHaveBeenCalledTimes(1)
  })

  it('should call setPopup and setShouldPromptLogin when clicked', () => {
    wrapper.find('button').simulate('click')
    expect(setPopupMock).toHaveBeenCalledTimes(2)
    expect(setShouldPromptLoginMock).toHaveBeenCalledTimes(1)
  })

  it('should call setPopup and setShouldPromptLogin when clicked', () => {
    wrapper.find('Link').simulate('click')
    expect(setPopupMock).toHaveBeenCalledTimes(1)
  })

})