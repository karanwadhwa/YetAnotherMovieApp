import {
  ADD_TO_WATCHLIST_MOVIE,
  ADD_TO_WATCHLIST_TV,
  SELECT_WATCHLIST_MOVIE,
  SELECT_WATCHLIST_TV
} from "../actions/types";

const initialState = {
  movies: [],
  tv: [],
  selectedMovie: {},
  selectedTV: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST_MOVIE:
      let movies = [...state.movies];
      let index = movies.findIndex(movie => movie.id === action.payload.id);
      if (index !== -1) {
        movies.splice(index, 1);
        return {
          ...state,
          movies
        };
      }
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };

    case ADD_TO_WATCHLIST_TV:
      let shows = [...state.tv];
      let ind = shows.findIndex(show => show.id === action.payload.id);
      if (ind !== -1) {
        shows.splice(ind, 1);
        return {
          ...state,
          tv: shows
        };
      }
      return {
        ...state,
        tv: [...state.tv, action.payload]
      };

    default:
      return state;
  }
};
