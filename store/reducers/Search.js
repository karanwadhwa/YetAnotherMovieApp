import { SET_SEARCH_TERM } from "../actions/types";

const initialState = {
  searchTerm: "",
  loading: false,
  searchResults: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      };
    default:
      return state;
  }
};
