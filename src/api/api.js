import apiKey from '../API_KEY/movie_api_key'

// const usersUrl = 'http://localhost:3000/api/'
const usersUrl = 'https://falsemotive.io/api/'
const moviesUrl = 'https://api.themoviedb.org/3/movie/now_playing'

// const options 

export const postData = async (path = '', user) => {
  const response = await fetch(`${usersUrl}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })

  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.message}: ${response.status}`);
  }
}

export const fetchData = async (path) => {
  const response = await fetch(`${usersUrl}${path}`)
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error(`${response.message}: ${response.status}`);
  }
}

export const fetchMovies = async () => {
  const response = await fetch(`${moviesUrl}${apiKey}`)
  const unfilteredMovies = await response.json()
  return unfilteredMovies.results
}