import { combineReducers } from "redux";

import dataReducer from "./data";
import pageReducer from "./page";
import flashReducer from "./flash";
import menuReducer from "./menu";

const combinedReducers = combineReducers({
  data: dataReducer,
  page: pageReducer,
  flash: flashReducer,
  menu: menuReducer,
});

export default combinedReducers;
