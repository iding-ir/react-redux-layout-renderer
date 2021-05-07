import { SELECT_PAGE, GET_PAGE_CONTENT } from "../constants";
import { IAction } from "../actions/page";

export interface IStatePage {
  selected: number | null;
  content: string | null;
}

const initialState: IStatePage = {
  selected: null,
  content: null,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SELECT_PAGE:
      return { ...state, selected: action.payload };
    case GET_PAGE_CONTENT:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export default reducer;
