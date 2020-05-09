import { SHOW_MENU, HIDE_MENU, SET_THEME, SET_LANGUAGE } from "../constants";

export const showMenu = () => {
  return {
    type: SHOW_MENU,
  };
};

export const hideMenu = () => {
  return {
    type: HIDE_MENU,
  };
};

export const setTheme = (theme) => {
  localStorage.setItem("theme", theme);

  return {
    type: SET_THEME,
    payload: theme,
  };
};

export const setLanguage = (language) => {
  localStorage.setItem("language", language);

  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};
