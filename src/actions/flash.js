import { SHOW_FLASH, HIDE_FLASH } from "../constants";

export const showFlash = () => {
  return {
    type: SHOW_FLASH,
  };
};

export const hideFlash = () => {
  return {
    type: HIDE_FLASH,
  };
};
