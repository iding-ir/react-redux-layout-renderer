import { SHOW_MENU, HIDE_MENU } from "../constants";

export interface IAction {
  type: string;
}

export const showMenu = (): IAction => {
  return {
    type: SHOW_MENU,
  };
};

export const hideMenu = (): IAction => {
  return {
    type: HIDE_MENU,
  };
};
