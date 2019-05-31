import {
  FETCH_MOVIES_POPULAR,
  FETCH_MOVIES_TOP_RATED,
  FETCH_MOVIES_UPCOMING,
  FETCH_MOVIES_NOW_PLAYING,
  SET_SELECTED_MOVIE_LIST
} from "../actions/types";

initialState = {
  popular: [],
  topRated: [],
  nowPlaying: [],
  upcoming: [],
  selectedList: {
    listTitle: "",
    listData: []
  }
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
    case SET_SELECTED_MOVIE_LIST:
      return {
        ...state,
        selectedList: {
          listTitle: action.payload.listTitle,
          listData: action.payload.listData
        }
      };
    default:
      return state;
  }
};
