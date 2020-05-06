import _ from "lodash";

import { FETCH_PAGES } from "../constants";

const INITIAL_STATE = {
  header: {
    title: "",
    description: "",
  },
  footer: "",
  pages: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PAGES:
      const pages = { ..._.mapKeys(action.payload.pages, "id") };
      const header = action.payload.header;
      const footer = action.payload.footer;

      return { ...state, pages, header, footer };
    default:
      return state;
  }
};

export default reducer;
