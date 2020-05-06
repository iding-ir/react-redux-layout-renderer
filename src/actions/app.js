import { FETCH_DATA } from "../constants";
import pages from "../apis/pages";

export const fetchData = () => async (dispatch) => {
  const response = await pages.get("/db.json");

  dispatch({ type: FETCH_DATA, payload: response.data });
};
