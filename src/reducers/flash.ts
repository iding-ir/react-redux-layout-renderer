import { SHOW_FLASH, HIDE_FLASH } from "../constants";
import { IAction } from "../actions/flash";

export interface IStateFlash {
  visible: boolean;
}

const initialState: IStateFlash = {
  visible: false,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SHOW_FLASH:
      return { ...state, visible: true };
    case HIDE_FLASH:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export default reducer;
