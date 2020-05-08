import { SELECT_PAGE, SHOW_MORE, HIDE_MORE, TOGGLE_MORE } from "../constants";

export const selectPage = (id) => {
  return {
    type: SELECT_PAGE,
    payload: id,
  };
};

export const showMore = () => {
  return {
    type: SHOW_MORE,
  };
};

export const hideMore = () => {
  return {
    type: HIDE_MORE,
  };
};

export const toggleMore = () => {
  return {
    type: TOGGLE_MORE,
  };
};
