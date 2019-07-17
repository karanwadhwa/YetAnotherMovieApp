import {
  SET_SEARCH_TERM,
  SET_SEARCH_RESULTS,
  SET_SEARCH_LOADING,
  ADD_TO_RECENT_SEARCH
} from "./types";

import { API_KEY } from "react-native-dotenv";
import { tmdb } from "../../config/api";

export const setSearchTerm = searchTerm => {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
};

export const setSearchLoading = () => {
  return {
    type: SET_SEARCH_LOADING
  };
};

export const fetchSearchResults = searchTerm => dispatch => {
  dispatch(setSearchLoading());
  tmdb
    .get(`/search/multi?api_key=${API_KEY}&query=${searchTerm}`)
    .then(response => {
      const searchResults = response.data.results.filter(
        media => media.media_type === "tv" || media.media_type === "movie"
      );
      dispatch(addToRecents(searchTerm));
      dispatch({
        type: SET_SEARCH_RESULTS,
        payload: searchResults
      });
    });
};

export const addToRecents = searchTerm => {
  return {
    type: ADD_TO_RECENT_SEARCH,
    payload: searchTerm
  };
};
