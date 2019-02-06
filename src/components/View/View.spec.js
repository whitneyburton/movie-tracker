import React from 'react'
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'
import View from './View'
import Movie from '../Movie/Movie'
import { mockMoviesArray, mockMovie } from '../../mockData/movies'

describe('View', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<View movies={mockMoviesArray} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render 3 routes', () => {
    let wrapper = shallow(<View movies={mockMoviesArray} />)
    expect(wrapper.find(Route).length).toEqual(3)
  })

  it('should invoke findClickedCard ', () => {
    let wrapper = shallow(<View movies={mockMoviesArray} />)
    let result = wrapper.instance().findClickedCard({ params: { id: "91" } })
    let expected = <Movie key={JSON.stringify(mockMovie)} movie={mockMovie} isPopup={true} />
    expect(result).toEqual(expected)
  })

  it('should invoke findClickedCard ', () => {
    let wrapper = shallow(<View movies={mockMoviesArray} />)
    let result = wrapper.instance().findClickedCard({ params: { id: "92" } })
    let expected = <div> Movie does not exist</div>
    expect(result).toEqual(expected)
  })
})