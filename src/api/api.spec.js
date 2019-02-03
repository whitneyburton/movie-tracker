import * as api from './'
import { mockMovie, mockMoviesResponse, mockMoviesArray } from '../mockData/movies'
import { mockUserFavesResponse, mockUserFavesArray } from '../mockData/userFavorites'

describe('api', () => {
  let mockUrl
  let mockPath
  let mockOptions

  describe('deleteData', () => {
    beforeEach(() => {
      mockUrl = 'https://falsemotive.io/api/'
      mockPath = 'users/27/'
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockMoviesResponse),
        ok: true,
      }))
    })

    it.skip('should call fetch with the correct params', () => {
      api.deleteData(mockPath, mockMovie)
      expect(window.fetch).toHaveBeenCalledWith(`${mockUrl}${mockPath}`)
    })
  })

  describe('getData', () => {
    beforeEach(() => {
      mockUrl = 'https://falsemotive.io/api/'
      mockPath = 'users/27/'
        
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockUserFavesResponse),
        ok: true,
      }))
    })

    it('should call fetch with the correct params', () => {
      api.getData(mockPath)
      expect(window.fetch).toHaveBeenCalledWith(`${mockUrl}${mockPath}`)
    })

    it('should return data if everything is ok', async () => {
      const expected = mockUserFavesArray
      const result = await api.getData(mockPath)
      expect(result).toEqual(expected)
    })


    it('should throw an error if everything is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 401,
        ok: false,
      }))
      const response = await window.fetch
      const expectedError = Error(`${response.statusText}`);
      await expect(api.getData(mockPath)).rejects.toEqual(expectedError)
    })
  })

  describe('getMovies', () => {
    let apiKey 

    beforeEach(() => {
      mockUrl = 'https://api.themoviedb.org/3/movie/'
      mockPath = 'users/27/favorites/'
      apiKey = '?api_key=c9bb5285a21a8f1a712d66e997b3a446'
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
      const response = await window.fetch
      const expectedError = Error(`${response.statusText}`);
      await expect(api.getMovies(mockPath)).rejects.toEqual(expectedError)
    })
  })
})