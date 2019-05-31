import {
  FETCH_TV_POPULAR,
  FETCH_TV_TOP_RATED,
  SET_SELECTED_TV_LIST
} from "../actions/types";

initialState = {
  popular: [],
  topRated: [],
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
    default:
      return state;
  }
};
