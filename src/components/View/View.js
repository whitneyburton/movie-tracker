import React from 'react'
import { Route } from 'react-router-dom'
import { Profile, Carousel } from '../../containers'
import { Movie } from '../../components'
import { Nav } from '../'
import './View.scss'

const View = ({ movies }) => {

  const findClickedCard = (match) => {
    const movie = movies.find(movie => movie.id === parseInt(match.params.id))
    if (!movie) return <div> Movie does not exist</div>
    return <Movie key={JSON.stringify(movie)} movie={movie} isPopup={true} />
  }

  return (
    <div className="Home">
      <Nav />
      <section className='View'>
        <Route path='/' component={Profile} />
        <Route path='/' render={({ location }) => <Carousel location={location} />} />
        <Route path='/movies/:id' render={({ match }) => findClickedCard(match)} />
      </section>
    </div>
  )
}

export default View