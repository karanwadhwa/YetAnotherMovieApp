import { ADD_TO_WATCHLIST_MOVIE, ADD_TO_WATCHLIST_TV } from "./types";

export const addToWatchlistMovie = movie => {
  return {
    type: ADD_TO_WATCHLIST_MOVIE,
    payload: movie
  };
};

export const addToWatchlistTV = tv => {
  return {
    type: ADD_TO_WATCHLIST_TV,
    payload: tv
  };
};
