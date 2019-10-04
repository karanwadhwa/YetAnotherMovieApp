import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistCombineReducers } from "redux-persist";
import { AsyncStorage } from "react-native";

import rootReducer from "./reducers";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const reduxPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["watchlist", "search"]
};

const reducer = persistCombineReducers(reduxPersistConfig, rootReducer);

/* const store = createStore(
  rootReducer,
  initialState,
  //composeEnhancers(applyMiddleware(...middleware))
  compose(applyMiddleware(...middleware)),
); */

export default function configureStore(initialState = {}) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  );

  const persistor = persistStore(store);
  return { persistor, store };
}
