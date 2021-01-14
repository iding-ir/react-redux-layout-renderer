import { SHOW_FLASH, HIDE_FLASH } from "../constants";

export interface IAction {
  type: string;
}

export const showFlash = (): IAction => {
  return {
    type: SHOW_FLASH,
  };
};

export const hideFlash = (): IAction => {
  return {
    type: HIDE_FLASH,
  };
};
