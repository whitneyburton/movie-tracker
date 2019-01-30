import React, { Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { setFilter } from '../../actions';
import { connect } from 'react-redux';

const Home = () => <div>Yeup</div>

const Nav = (props) => (
  <Fragment>
    <nav>
      <NavLink to='/recent' name='recent' onClick={(e) => {
        e.preventDefault()
        props.setFilter(e.target.name)
      }}>Recent Movies</NavLink>
      <NavLink to='/recent' name='popular' onClick={(e) => {
        e.preventDefault()
        props.setFilter(e.target.name)
      }}>Popular Movies</NavLink>
      <NavLink to='/recent' name='favorites' onClick={(e) => {
        e.preventDefault()
        props.setFilter(e.target.name)
      }}>Favorite Movies</NavLink>    </nav>
  
    <Route path='/recent' component={Home} />
  </Fragment>
)

const mapDispatchToProps = (dispatch) => ({
  setFilter: (text) => dispatch(setFilter(text))
})

export default connect(null, mapDispatchToProps)(Nav);