import { SHOW_MORE, HIDE_MORE, TOGGLE_MORE } from "../constants";
import { IAction } from "../actions/page";

export interface IStateMore {
  visible: boolean;
}

const initialState: IStateMore = {
  visible: false,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SHOW_MORE:
      return { ...state, visible: true };
    case HIDE_MORE:
      return { ...state, visible: false };
    case TOGGLE_MORE:
      return { ...state, visible: !state.visible };
    default:
      return state;
  }
};

export default reducer;
