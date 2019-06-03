import {
  FETCH_MOVIES_POPULAR,
  FETCH_MOVIES_TOP_RATED,
  FETCH_MOVIES_UPCOMING,
  FETCH_MOVIES_NOW_PLAYING,
  SET_SELECTED_MOVIE_LIST,
  SELECT_MOVIE
} from "./types";
import { API_KEY } from "react-native-dotenv";
import axios from "axios";
import { tmdb } from "../../config/api";

export const fetchPopularMovies = () => dispatch => {
  tmdb.get(`/movie/popular?api_key=${API_KEY}`).then(response => {
    dispatch({
      type: FETCH_MOVIES_POPULAR,
      payload: response.data.results
    });
  });
};

export const fetchTopRatedMovies = () => dispatch => {
  tmdb.get(`/movie/top_rated?api_key=${API_KEY}`).then(response => {
    dispatch({
      type: FETCH_MOVIES_TOP_RATED,
      payload: response.data.results
    });
  });
};

export const fetchUpcomingMovies = () => dispatch => {
  tmdb.get(`/movie/upcoming?api_key=${API_KEY}`).then(response => {
    dispatch({
      type: FETCH_MOVIES_UPCOMING,
      payload: response.data.results
    });
  });
};

export const fetchNowPlayingMovies = () => dispatch => {
  tmdb.get(`/movie/now_playing?api_key=${API_KEY}`).then(response => {
    dispatch({
      type: FETCH_MOVIES_NOW_PLAYING,
      payload: response.data.results
    });
  });
};

export const setSelectedMovieList = (listTitle, listData) => {
  return {
    type: SET_SELECTED_MOVIE_LIST,
    payload: { listTitle, listData }
  };
};

export const selectMovie = id => dispatch => {
  console.log("movie id" + id);

  tmdb
    .get(
      `/movie/${id}?api_key=${API_KEY}&append_to_response=similar,recommendations,credits`
    )
    .then(response => {
      dispatch({
        type: SELECT_MOVIE,
        payload: response.data
      });
    });
};
