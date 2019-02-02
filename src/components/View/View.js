import React from 'react'
import { Route } from 'react-router-dom'
import { Profile, Carousel } from '../../containers/'
import './View.scss'

const View = () => {
  return (
    <div className='View'>
      <Route path='/' component={Profile} />
      <Route path='/' render={({ location }) => {
        return <Carousel location={location} />
      }} />
    </div>
  )
}

export default View