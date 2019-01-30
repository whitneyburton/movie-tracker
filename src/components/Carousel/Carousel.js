import React from 'react';
import { connect } from 'react-redux';
import './Carousel.scss';
const Carousel = (props) => {
  return <h1>{JSON.stringify(props.movies)}</h1>
} 

const mapStateToProps = (state) => ({
  movies:state.movies
})
export default connect(mapStateToProps)(Carousel);