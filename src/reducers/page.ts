import { SELECT_PAGE } from "../constants";
import { IAction } from "../actions/page";

export interface IStatePage {
  selected: any;
}

const initialState: IStatePage = {
  selected: null,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SELECT_PAGE:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default reducer;
