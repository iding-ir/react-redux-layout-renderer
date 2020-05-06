import { SELECT_PAGE } from "../constants";

export const selectPage = (id) => {
  return {
    type: SELECT_PAGE,
    payload: id,
  };
};
