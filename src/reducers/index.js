import { combineReducers } from "redux";

import appReducer from "./app";
import selectedReducer from "./selected";
import flashReducer from "./flash";

const combinedReducers = combineReducers({
  app: appReducer,
  selected: selectedReducer,
  flash: flashReducer,
});

export default combinedReducers;
