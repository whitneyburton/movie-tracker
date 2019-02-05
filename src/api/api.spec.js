import * as api from './'
import { mockMovie, mockMoviesResponse, mockMoviesArray } from '../mockData/movies'
import { mockUserFavesResponse, mockUserFavesArray } from '../mockData/userFavorites'
import apiKey from '../api/movie_api_key'
let mockUrl = 'https://falsemotive.io/api/'
let mockPath = 'users/27/'

describe('api with succesfull return', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockUserFavesResponse),
      ok: true,
    }))
  })

  it('should call  postData with the correct params', async () => {
    await api.postData(mockPath, mockMovie)
    await expect(window.fetch).toHaveBeenCalledWith(`${mockUrl}${mockPath}`, api.options('POST', mockMovie))
  })

  it('should call deleteData with the correct params', async () => {
    await api.deleteData(mockPath, mockMovie)
    await expect(window.fetch).toHaveBeenCalledWith(`${mockUrl}${mockPath}`, api.options('DELETE', mockMovie))
  })

  it('should call getData with the correct params', async () => {
    await api.getData(mockPath)
    await expect(window.fetch).toHaveBeenCalledWith(`${mockUrl}${mockPath}`)
  })

  it('should return data if everything is ok', async () => {
    const expected = mockUserFavesArray
    const result = await api.getData(mockPath)
    await expect(result).toEqual(expected)
  })

})



describe('api should return error if not ok', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 401,
      ok: false,
    }))
  })

  it('should throw error if postData is not ok', async () => {
    const expectedError = Error(`Could not post`)
    //expectation
    await expect(api.postData(mockPath, mockMovie)).rejects.toEqual(expectedError)
  })

  it('should throw error if not ok', async () => {
    const expectedError = Error(`Could not delete`);

    //expectation
    await expect(api.deleteData(mockPath, mockMovie)).rejects.toEqual(expectedError)
  })


  it('should throw an error if everything is not ok', async () => {
    const response = await window.fetch
    const expectedError = Error(`Could not get Data`);
    await expect(api.getData(mockPath)).rejects.toEqual(expectedError)
  })
})

describe('getMovies', () => {
  beforeEach(() => {
    mockUrl = 'https://api.themoviedb.org/3/movie/'
    mockPath = 'users/27/favorites/'
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockMoviesResponse),
      ok: true,
    }))
  })

  it('should call fetch with the correct params', () => {
    api.getMovies(mockPath)
    expect(window.fetch).toHaveBeenCalledWith(`${mockUrl}${mockPath}${apiKey}`)
  })

  it('should return data if everything is ok', async () => {
    const expected = mockMoviesArray
    const result = await api.getMovies(mockPath)
    await expect(result).toEqual(expected)
  })

  it('should throw an error if everything is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 401,
      ok: false,
    }))
    const expectedError = Error(`Could not get Movie`);
    await expect(api.getMovies(mockPath)).rejects.toEqual(expectedError)
  })
})
