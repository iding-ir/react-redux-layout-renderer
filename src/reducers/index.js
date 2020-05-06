import { combineReducers } from "redux";

import pagesReducer from "./pages";
import selectedReducer from "./selected";
import flashReducer from "./flash";

const combinedReducers = combineReducers({
  pages: pagesReducer,
  selected: selectedReducer,
  flash: flashReducer,
});

export default combinedReducers;
