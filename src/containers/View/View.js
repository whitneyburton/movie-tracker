import React, { Fragment } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import { Route } from 'react-router-dom';
import './View.scss'
export default () => {
  return (
    <div className='View'>
      <Route path='/recent' component={Carousel} />
    </div>)
}
