import {
  SHOW_MENU,
  HIDE_MENU,
  CHANGE_THEME,
  CHANGE_LANGUAGE,
} from "../constants";

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
    case CHANGE_THEME:
      return { ...state, theme: action.payload };
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default reducer;
