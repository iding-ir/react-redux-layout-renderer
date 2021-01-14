import { SHOW_MORE, HIDE_MORE, TOGGLE_MORE } from "../constants";

export interface IAction {
  type: string;
}

export const showMore = (): IAction => {
  return {
    type: SHOW_MORE,
  };
};

export const hideMore = (): IAction => {
  return {
    type: HIDE_MORE,
  };
};

export const toggleMore = (): IAction => {
  return {
    type: TOGGLE_MORE,
  };
};
