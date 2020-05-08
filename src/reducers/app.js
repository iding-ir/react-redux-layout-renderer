import _ from "lodash";

import { FETCH_DATA } from "../constants";

const INITIAL_STATE = {
  header: {
    title: "",
    description: "",
  },
  footer: "",
  pages: [],
  menu: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      const pages = { ..._.mapKeys(action.payload.pages, "id") };
      const header = action.payload.header;
      const footer = action.payload.footer;
      const menu = action.payload.menu;

      return { ...state, pages, header, footer, menu };
    default:
      return state;
  }
};

export default reducer;
