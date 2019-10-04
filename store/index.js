import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, autoRehydrate } from "redux-persist";

import rootReducer from "./reducers";

const initialState = {};
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  //composeEnhancers(applyMiddleware(...middleware))
  compose(applyMiddleware(...middleware))
);

export default store;
