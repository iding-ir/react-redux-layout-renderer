import { combineReducers } from "redux";

import dataReducer, { IStateData } from "./data";
import pageReducer, { IStatePage } from "./page";
import flashReducer, { IStateFlash } from "./flash";
import menuReducer, { IStateMenu } from "./menu";
import settingsReducer, { IStateSettings } from "./settings";
import moreReducer, { IStateMore } from "./more";

export interface IState {
  data: IStateData;
  page: IStatePage;
  flash: IStateFlash;
  menu: IStateMenu;
  settings: IStateSettings;
  more: IStateMore;
}

const combinedReducers = combineReducers({
  data: dataReducer,
  page: pageReducer,
  flash: flashReducer,
  menu: menuReducer,
  settings: settingsReducer,
  more: moreReducer,
});

export default combinedReducers;
