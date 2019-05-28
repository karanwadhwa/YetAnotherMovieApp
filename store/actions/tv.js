import { FETCH_TV_POPULAR, FETCH_TV_TOP_RATED } from "./types";
import { API_KEY } from "react-native-dotenv";

import { tmdb } from "../../config/api";

export const fetchPopularTV = () => dispatch => {
  tmdb.get(`/tv/popular?api_key=${API_KEY}`).then(response => {
    dispatch({
      type: FETCH_TV_POPULAR,
      payload: response.data.results
    });
  });
};

export const fetchTopRatedTV = () => dispatch => {
  tmdb.get(`/tv/top_rated?api_key=${API_KEY}`).then(response => {
    dispatch({
      type: FETCH_TV_TOP_RATED,
      payload: response.data.results
    });
  });
};
