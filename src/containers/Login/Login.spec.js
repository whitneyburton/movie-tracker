import React from 'react'
import { shallow } from 'enzyme'
import { postData, getData } from '../../api'
import { setMovies, setUser, setFavorites, setShouldPromptLogin, setPopup } from '../../actions'
import { Login, mapDispatchToProps, mapStateToProps } from './Login'
jest.mock('../../api')

let wrapper
let setUserMock = jest.fn()
let setFavoritesMock = jest.fn()
let setPopupMock = jest.fn()
let setShouldPromptLoginMock = jest.fn()
let setMoviesMock = jest.fn()
window.fetch = jest.fn()
window.getData = jest.fn()

describe('Login', () => {

  beforeEach(() => {

    wrapper = shallow(<Login
      setUser={setUserMock}
      setFavorites={setFavoritesMock}
      setPopup={setPopupMock}
      setShouldPromptLogin={setShouldPromptLoginMock}
      setMovies={setMovies}
    />)
    postData.mockReturnValue({name:'johnny',id:1})
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call setPopupMock when link is clicked', () => {
    wrapper.find('Link').simulate('click')

    expect(setPopupMock).toHaveBeenCalled()
  })
  it('should call setFavoriteMock when link is clicked', async () => {
    wrapper.setState({ password: 'f', email: 'me@me.com' })
    await wrapper.instance().handleSubmit({ preventDefault: () => '' })

    await expect(setFavoritesMock).toHaveBeenCalled()
  })
  it('should set login to true when link is clicked',async () => {
    await wrapper.instance().handleSubmit({ preventDefault: () => '' })

    await expect(wrapper.state('canLogin')).toEqual(true)
  })


  describe('mapStateToProps', () => {
    let mockState = {
      movies: { movieOne: {} },
      eggs: 'scrambled',
      toast: 'toasted'
    }
    let expected = {
      movies : mockState.movies
    }

    let result = mapStateToProps(mockState)
    expect(result).toEqual(expected)

  })

  describe('mapDispatchToProps', () => {
    let mockDispatch = jest.fn()
    let props = mapDispatchToProps(mockDispatch)

    it('should call dispatch when setmovies is called ', () => {
      const expected = setMovies({ movies: 'yaa' })
      props.setMovies({ movies: 'yaa' })
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })

    it('should call dispatch setShouldPromptLogin is called ', () => {
      const expected = setShouldPromptLogin(true)
      props.setShouldPromptLogin(true)
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })

    it('should call dispatch setPopup is called ', () => {
      const expected = setPopup(false)
      props.setPopup(false)
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })

    it('should call dispatch setPopup is called ', () => {
      const expected = setPopup(true)
      props.setPopup(true)
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })

  })
})
