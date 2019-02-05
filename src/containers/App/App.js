import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMovies } from '../../api/'
import { setMovies, setShouldPromptLogin, setPopup } from '../../actions'
import { View, CreateAccountPrompt } from '../../components/'
import { Login, CreateUser } from '../../containers/'
import '../../styles/main.scss'

export class App extends Component {

  componentDidMount = async () => {
    let movies
    try {
      movies = await getMovies('now_playing')
      // await movies.forEach(async (movie) => {
      //   const path = movie.id + '/videos'
      //   const trailerKeys = await getMovies(path)
      //   movie.trailer = trailerKeys[0].key
      // })
    } catch (error) {
      console.log('Error getting data')
    }

    this.props.setMovies(movies)
  }

  render() {
    const { canPopup, setPopup, setShouldPromptLogin } = this.props
    return (
      <div className="App">
        <Route path='/login' component={Login} />
        <Route path='/create-user' render={() => <CreateUser setPopup={setPopup} />} />
        <Route path='/' render={() => canPopup && <CreateAccountPrompt
          setPopup={setPopup}
          setShouldPromptLogin={setShouldPromptLogin} />} />
        <Route path='/' render={() => <View movies={this.props.movies} />} />
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  canPopup: state.shouldPromptLogin,
  user: state.user
})
export const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(setMovies(movies)),
  setShouldPromptLogin: (bool) => dispatch(setShouldPromptLogin(bool)),
  setPopup: (bool) => dispatch(setPopup(bool))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))