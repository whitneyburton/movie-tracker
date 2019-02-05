import React from 'react'
import { App } from './App'
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'
import { setMovies, setShouldPromptLogin, setPopup } from '../../actions'
import { getMovies } from '../../api/'
jest.mock('../../actions')
jest.mock('../../api/')

describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App
      canPopup={true}
      setPopup={setPopup}
      setShouldPromptLogin={setShouldPromptLogin}
      setMovies={setMovies}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should invoke setMovies with "now_playing" ', async () => {
    await expect(getMovies).toHaveBeenCalledWith('now_playing')
    await expect(setMovies).toHaveBeenCalled()
  })

  it('should render 4 routes', () => {
    expect(wrapper.find(Route).length).toBe(4)
  })

})