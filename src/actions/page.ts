import { SELECT_PAGE } from "../constants";

export interface IAction {
  type: string;
  payload: number | null;
}

export const selectPage = (id: number | null): IAction => {
  return {
    type: SELECT_PAGE,
    payload: id,
  };
};
