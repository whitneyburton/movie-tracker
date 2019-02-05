import React from 'react'
import CreateAccountPrompt from './CreateAccountPrompt'
import { shallow } from 'enzyme'

describe('CreateAccountPrompt', () => {
  const setShouldPromptLoginMock = jest.fn()
  const setPopupMock = jest.fn()
  const wrapper = shallow(<CreateAccountPrompt
    setShouldPromptLogin={setShouldPromptLoginMock}
    setPopup={setPopupMock}
  />)
  

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call setPopup and setShouldPromptLogin when clicked', () => {
    wrapper.find('.test').simulate('click')
    expect(setPopupMock).toHaveBeenCalledTimes(2)
  })

})