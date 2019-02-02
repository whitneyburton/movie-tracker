import React from 'react'
import { Route } from 'react-router-dom'
import { Profile, Carousel } from '../../containers/'
import './View.scss'

const View = () => {
  return (
    <div className='View'>
      <Route path='/' component={Profile} />
      <Route path='/' component={Carousel} />
    </div>
  )
}

export default View