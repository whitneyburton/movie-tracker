import React from 'react'
import { App } from './App'
import { shallow } from 'enzyme'
import { movies } from '../../mockData/movies'
import * as actions from '../../actions/'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('retrieveMovies', () => {
    // beforeEach(() => {
    //   fetchMovies = jest.fn(() => movies)
    //   actions.setMovies = jest.fn(() => )
    // })

    // it('should invoke fetchMovies and setMovies', async () => {
    //   await wrapper.instance().retrieveMovies()
    //   await expect(fetchMovies).toHaveBeenCalledTimes(1)
    //   await expect()
    // })
  })
})