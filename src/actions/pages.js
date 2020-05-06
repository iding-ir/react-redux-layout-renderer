import { FETCH_PAGES } from "../constants";
import pages from "../apis/pages";

export const fetchPages = () => async (dispatch) => {
  const response = await pages.get("/db.json");

  dispatch({ type: FETCH_PAGES, payload: response.data.pages });
};
