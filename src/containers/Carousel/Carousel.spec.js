import React from 'react'
import { Carousel } from './Carousel'
import { shallow } from 'enzyme'
import { mockMoviesArray } from '../../mockData/movies.js'

describe('Carousel', () => {
  let wrapper
  it('should match the snapshot', () => {
    wrapper = shallow(<Carousel movies={mockMoviesArray} isPopup={true} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot', () => {
    wrapper = shallow(<Carousel movies={mockMoviesArray} />)
    expect(wrapper.find('.Carousel').exists()).toBe(true)
  })

  it('should match the snapshot', () => {
    wrapper = shallow(<Carousel movies={mockMoviesArray} isPopup={true} />)
    expect(wrapper.find('.blur').exists()).toBe(true)
  })
})
