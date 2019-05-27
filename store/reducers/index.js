import { combineReducers } from "redux";

import Movies from "./Movies";
import TV from "./TV";
import Favourites from "./Favourites";
import Search from "./Search";

export default combineReducers({
  movies: Movies,
  tv: TV,
  search: Search,
  favourites: Favourites
});
