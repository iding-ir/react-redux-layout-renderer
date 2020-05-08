import {
  SHOW_MENU,
  HIDE_MENU,
  CHANGE_THEME,
  CHANGE_LANGUAGE,
} from "../constants";

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

export const changeTheme = (theme) => {
  return {
    type: CHANGE_THEME,
    payload: theme,
  };
};

export const changeLanguage = (language) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: language,
  };
};
