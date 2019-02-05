import React from 'react'
import { shallow } from 'enzyme'
import { App, mapDispatchToProps, mapStateToProps } from './App'
import { Route } from 'react-router-dom'
import { setShouldPromptLogin, setPopup, setMovies } from '../../actions'
import { getMovies, getData } from '../../api/'
import { mockMoviesArray } from '../../mockData/movies'
import CreateUser from '../CreateUser/CreateUser';
jest.mock('../../actions')
jest.mock('../../api/')

describe('App', () => {
  let wrapper
  getMovies.mockReturnValue( mockMoviesArray)
  getData.mockReturnValue({ ok: true })
  window.fetch = jest.fn().mockReturnValue({ ok: true })
  beforeEach(() => {
    wrapper = shallow(<App
      movies={mockMoviesArray}
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


  describe('mapStateToProps', () => {
    it('should return an array,bool and object', () => {
      const mockState = {
        shouldPromptLogin: false,
        movies: mockMoviesArray,
        user: { name: 'jay' },
        random: 'I am random',
      }

      const expected = {
        canPopup: false,
        movies: mockMoviesArray,
        user: { name: 'jay' },
      }
      const result = mapStateToProps(mockState)
      expect(result).toEqual(expected)

    })
  })

  describe('mapDispatchToProps', () => {
    const dispatchMock = jest.fn()
    const props = mapDispatchToProps(dispatchMock)

    it('should call dispatch set movies is called ', () => {
      const expected = setMovies({ movies: 'yaa' })
      props.setMovies({ movies: 'yaa' })
      expect(dispatchMock).toHaveBeenCalledWith(expected)
    })

    it('should call dispatch setShouldPromptLogin is called ', () => {
      const expected = setShouldPromptLogin(true)
      props.setShouldPromptLogin(true)
      expect(dispatchMock).toHaveBeenCalledWith(expected)
    })

    it('should call dispatch setPopup is called ', () => {
      const expected = setPopup(false)
      props.setPopup(false)
      expect(dispatchMock).toHaveBeenCalledWith(expected)
    })
  })

})