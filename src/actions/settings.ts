import { SET_THEME, SET_LANGUAGE } from "../constants";

export interface IAction {
  type: string;
  payload: string;
}

export const setTheme = (theme: string): IAction => {
  localStorage.setItem("theme", theme);

  return {
    type: SET_THEME,
    payload: theme,
  };
};

export const setLanguage = (language: string): IAction => {
  localStorage.setItem("language", language);

  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};
