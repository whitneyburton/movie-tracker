import React from 'react'
import Nav from '../../containers/Nav/Nav'
import View from '../../containers/View/View'
import './Home.scss'

const Home = () => {
  // ternary check to see if user is logged in 
  // if so, return home, if not, Redirect to login
  return (
    <div className='Home' >
      <Nav />
      <View />
    </div >
  )
}

export default Home;