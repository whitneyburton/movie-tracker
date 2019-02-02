import React from 'react'
import Carousel from './Carousel'
import {shallow} from 'enzyme'
import movies from '../../mockData/movies.js'

describe('Carousel', ()=>{
  let wrapper
  it('should match the snapshot', ()=>{
    wrapper = shallow(<Carousel movies={movies}/>)
  })
})
