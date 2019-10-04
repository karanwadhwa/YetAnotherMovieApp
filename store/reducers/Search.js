import { PERSIST_REHYDRATE } from "redux-persist/lib/constants";

import {
  SET_SEARCH_TERM,
  SET_SEARCH_LOADING,
  SET_SEARCH_RESULTS,
  ADD_TO_RECENT_SEARCH
} from "../actions/types";

const initialState = {
  searchTerm: "",
  loading: false,
  searchResults: [],
  recents: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PERSIST_REHYDRATE:
      return action.payload.search || initialState;
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      };
    case SET_SEARCH_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        loading: false,
        searchResults: action.payload
      };
    case ADD_TO_RECENT_SEARCH:
      let recents = [...state.recents];
      if (recents.length == 10) recents.pop();
      recents.unshift(action.payload);

      return {
        ...state,
        recents
      };
    default:
      return state;
  }
};
