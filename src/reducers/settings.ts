import { SET_THEME, SET_LANGUAGE } from "../constants";
import { IAction } from "../actions/settings";

export interface IStateSettings {
  theme: string;
  language: string;
}

const initialState: IStateSettings = {
  theme:
    localStorage.getItem("theme") ||
    (process.env.REACT_APP_DEFAULT_THEME as string),
  language:
    localStorage.getItem("language") ||
    (process.env.REACT_APP_DEFAULT_LANGUAGE as string),
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default reducer;
