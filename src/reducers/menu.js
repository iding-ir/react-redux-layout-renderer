import { SHOW_MENU, HIDE_MENU, SET_THEME, SET_LANGUAGE } from "../constants";

const INITIAL_STATE = {
  visible: false,
  theme: null,
  language: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MENU:
      return { ...state, visible: true };
    case HIDE_MENU:
      return { ...state, visible: false };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default reducer;
