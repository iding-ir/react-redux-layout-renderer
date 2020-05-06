import { combineReducers } from "redux";

import pagesReducer from "./pages";
import selectedReducer from "./selected";

const combinedReducers = combineReducers({
  pages: pagesReducer,
  selected: selectedReducer,
});

export default combinedReducers;
