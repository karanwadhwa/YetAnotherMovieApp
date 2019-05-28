import { FETCH_TV_POPULAR, FETCH_TV_TOP_RATED } from "../actions/types";

initialState = {
  popular: [],
  topRated: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TV_POPULAR:
      return {
        ...state,
        popular: action.payload
      };
    case FETCH_TV_TOP_RATED:
      return {
        ...state,
        topRated: action.payload
      };
    default:
      return state;
  }
};
