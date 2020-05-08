import { combineReducers } from "redux";

import appReducer from "./app";
import selectedReducer from "./selected";
import flashReducer from "./flash";
import menuReducer from "./menu";

const combinedReducers = combineReducers({
  app: appReducer,
  selected: selectedReducer,
  flash: flashReducer,
  menu: menuReducer,
});

export default combinedReducers;
