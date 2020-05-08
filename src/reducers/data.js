import { FETCH_DATA } from "../constants";

const INITIAL_STATE = [
  {
    locale: "",
    header: {
      title: "",
      description: "",
    },
    footer: "",
    pages: [],
    menu: [],
  },
];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...action.payload };
    default:
      return state;
  }
};

export default reducer;
