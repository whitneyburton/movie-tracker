import apiKey from './movie_api_key'

// const dbUrl = 'http://localhost:3000/api/'
const dbUrl = 'https://falsemotive.io/api/'
const moviesUrl = 'https://api.themoviedb.org/3/movie/'
export const options = (method, data) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
})

export const postData = async (path = '', data) => {
  const response = await fetch(`${dbUrl}${path}`, options('POST', data))
  if (!response.ok) throw new Error(`Could not post`)
  const unfilteredData = await response.json()
  return unfilteredData.data
}

export const deleteData = async (path = '', data) => {
  const response = await fetch(`${dbUrl}${path}`, options('DELETE', data))
  if (!response.ok) throw new Error(`Could not delete`)
  const unfilteredData = await response.json()
  return unfilteredData.results
}

export const getData = async (path) => {
  const response = await fetch(`${dbUrl}${path}`)
  if (!response.ok) throw new Error(`${response.statusText}`)
  const unfilteredData = await response.json()
  return unfilteredData.data
}

export const getMovies = async (path) => {
  const response = await fetch(`${moviesUrl}${path}${apiKey}`)
  if (!response.ok) throw new Error(`${response.statusText}`)
  const unfilteredMovies = await response.json()
  return unfilteredMovies.results
}
