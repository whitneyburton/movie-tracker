import apiKey from '../API_KEY/movie_api_key'

export const moviesReducer = async (state = [], action) => {
    switch (action.type) {
        // case 'TOGGLE_FAVORITE':
        //     const newState = [...state];
        //     return newState.map(movie => {
        //         if (movie.id === action.id) {
        //             return { ...movie, isFavorite: !movie.isFavorite }
        //         } else {
        //             return movie
        //         }
        //     })
        case 'FETCH_MOVIES':
            const response = await fetch(`https://api.themoviedb.org/3/movie/550${apiKey}`);
            let movie = await response.json();
            console.log(movie)
            return await movie;
        default: return state;
    }
}
