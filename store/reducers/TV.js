import {
  FETCH_TV_POPULAR,
  FETCH_TV_TOP_RATED,
  SET_SELECTED_TV_LIST,
  SELECT_TV
} from "../actions/types";

initialState = {
  popular: [],
  topRated: [],
  selected: {},
  selectedList: {
    listTitle: "",
    listData: []
  }
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
    case SET_SELECTED_TV_LIST:
      return {
        ...state,
        selectedList: {
          listTitle: action.payload.listTitle,
          listData: action.payload.listData
        }
      };
    case SELECT_TV:
      return {
        ...state,
        selected: action.payload
      };
    default:
      return state;
  }
};
