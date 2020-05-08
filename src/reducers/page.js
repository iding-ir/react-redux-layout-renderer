import { SELECT_PAGE, SHOW_MORE, HIDE_MORE, TOGGLE_MORE } from "../constants";

const INITIAL_STATE = {
  selected: null,
  more: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_PAGE:
      return { ...state, selected: action.payload };
    case SHOW_MORE:
      return { ...state, more: true };
    case HIDE_MORE:
      return { ...state, more: false };
    case TOGGLE_MORE:
      return { ...state, more: !state.more };
    default:
      return state;
  }
};

export default reducer;
