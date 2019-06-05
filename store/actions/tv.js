import {
  FETCH_TV_POPULAR,
  FETCH_TV_TOP_RATED,
  SET_SELECTED_TV_LIST,
  SELECT_TV
} from "./types";
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

export const setSelectedTVList = (listTitle, listData) => {
  return {
    type: SET_SELECTED_TV_LIST,
    payload: { listTitle, listData }
  };
};

export const selectTV = id => dispatch => {
  tmdb
    .get(
      `/tv/${id}?api_key=${API_KEY}&append_to_response=external_ids,images,similar,recommendations,credits`
    )
    .then(response => {
      dispatch({
        type: SELECT_TV,
        payload: response.data
      });
    });
};
