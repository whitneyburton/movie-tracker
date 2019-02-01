import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { Route } from 'react-router-dom'
import './View.scss'
import Profile from '../Profile/Profile'

export default () => {
  return (
    <div className='View'>
      <Route path='/' component={Profile}/>
      <Route path='/' component={Carousel} />
    </div>)
}
