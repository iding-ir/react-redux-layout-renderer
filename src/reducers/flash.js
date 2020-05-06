import { SHOW_FLASH, HIDE_FLASH } from "../constants";

const INITIAL_STATE = false;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_FLASH:
      return true;
    case HIDE_FLASH:
      return false;
    default:
      return state;
  }
};

export default reducer;
