import {
  FETCH_MOVIES_POPULAR,
  FETCH_MOVIES_TOP_RATED,
  FETCH_MOVIES_UPCOMING,
  FETCH_MOVIES_NOW_PLAYING
} from "../actions/types";

initialState = {
  popular: [],
  topRated: [],
  nowPlaying: [],
  upcoming: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_POPULAR:
      return {
        ...state,
        popular: action.payload
      };
    case FETCH_MOVIES_TOP_RATED:
      return {
        ...state,
        topRated: action.payload
      };
    case FETCH_MOVIES_UPCOMING:
      return {
        ...state,
        upcoming: action.payload
      };
    case FETCH_MOVIES_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: action.payload
      };
    default:
      return state;
  }
};
