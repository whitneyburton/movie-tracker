import React, { Component } from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
const Card = <div>Yeup</div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/recent' component={Card}>Recent Movies</NavLink>
          <NavLink to='/favorites' component={Card}>Favorite Movies</NavLink>
          <NavLink to='/popular' component={Card}>Popular Movies</NavLink>
        </nav>
      </div>
    );
  }
}

export default App;
