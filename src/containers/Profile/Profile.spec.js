import React from 'react'
import { shallow } from 'enzyme'
import { Profile, mapStateToProps, mapDispatchToProps } from './Profile'
import { setUser, setMovies, setPopup } from '../../actions'

describe('Profile', () => {
  let wrapper
  let setUserMock = jest.fn()
  let setMoviesMock = jest.fn()
  let setPopupMock = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <Profile
        user={null}
        setUser={setUserMock}
        setMovies={setMoviesMock}
        setPopup={setPopupMock}
      />)
  })

  it('should pass a test', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should be able to click sign in if not logged in', () => {
    wrapper.find('.login-link').simulate('click')
    expect(setPopupMock).toHaveBeenCalled()
  })

  it('should be able to click sign out if logged in', () => {
    wrapper = shallow(
      <Profile
        user={{ name: 'bob' }}
        setUser={setUserMock}
        setMovies={setMoviesMock}
        setPopup={setPopupMock}
      />)
    wrapper.find('.logout-btn').simulate('click')
    expect(setUserMock).toHaveBeenCalledWith(null)
  })

  describe('mapStateToProps', () => {
    it('should match the needed state', () => {
      let mockState = {
        name: 'bob',
        user: { name: 'joe' },
        truck: 'chevy'
      }
      let expected = {
        user: { name: 'joe' }
      }
      let result = mapStateToProps(mockState)
      expect(result).toEqual(expected)
    })

  })

  describe('mapDispatchToProps', () => {
    let mockDispatch = jest.fn()
    let props = mapDispatchToProps(mockDispatch)


    it('should call dispatch when setuser is invoked', () => {
      const expected = setUser({ name: 'joe' })
      props.setUser({ name: 'joe' })
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })

    it('should call dispatch when setMovies is invoked', () => {
      const expected = setMovies({ movie: 'the best' })
      props.setMovies({ movie: 'the best' })
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })

    it('should call dispatch when setPopup is invoked', () => {
      const expected = setPopup(true)
      props.setPopup(true)
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })
})
