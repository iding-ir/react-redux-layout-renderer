import { FETCH_DATA } from "../constants";
import data from "../apis/data";

export interface IAction {
  type: string;
  payload: any;
}

export const fetchData = () => async (dispatch: any): Promise<any> => {
  const response = await data.get("/db.json");

  dispatch({
    type: FETCH_DATA,
    payload: response.data,
  });
};
