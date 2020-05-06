import { combineReducers } from "redux";

import pagesReducer from "./pages";

const combinedReducers = combineReducers({
  pages: pagesReducer,
});

export default combinedReducers;
