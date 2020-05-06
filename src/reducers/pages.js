import _ from "lodash";

import { FETCH_PAGES } from "../constants";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PAGES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

export default reducer;
