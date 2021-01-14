import { SELECT_PAGE } from "../constants";

export interface IAction {
  type: string;
  payload: number;
}

export const selectPage = (id: number): IAction => {
  return {
    type: SELECT_PAGE,
    payload: id,
  };
};
