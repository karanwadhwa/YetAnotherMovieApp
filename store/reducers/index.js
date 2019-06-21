import { combineReducers } from "redux";

import Movies from "./Movies";
import TV from "./TV";
import Watchlist from "./Watchlist";
import Search from "./Search";

export default combineReducers({
  movies: Movies,
  tv: TV,
  search: Search,
  watchlist: Watchlist
});
