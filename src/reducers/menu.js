import {
  SHOW_MENU,
  HIDE_MENU,
  CHANGE_THEME,
  CHANGE_LOCALE,
} from "../constants";

const INITIAL_STATE = {
  visible: false,
  theme: null,
  locale: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MENU:
      return { ...state, visible: true };
    case HIDE_MENU:
      return { ...state, visible: false };
    case CHANGE_THEME:
      return { ...state, theme: action.payload };
    case CHANGE_LOCALE:
      return { ...state, locale: action.payload };
    default:
      return state;
  }
};

export default reducer;
