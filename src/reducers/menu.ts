import { SHOW_MENU, HIDE_MENU } from "../constants";
import { IAction } from "../actions/menu";

export interface IStateMenu {
  visible: boolean;
}

const initialState: IStateMenu = {
  visible: false,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SHOW_MENU:
      return { ...state, visible: true };
    case HIDE_MENU:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export default reducer;
