import { SELECT_PAGE } from "../constants";

const INITIAL_STATE = { selected: null };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_PAGE:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default reducer;
