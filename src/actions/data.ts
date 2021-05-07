import { FETCH_DATA } from "../constants";
import data from "../apis/data";
import { IData } from "../interfaces";

export interface IAction {
  type: string;
  payload: IData;
}

export const fetchData = () => async (dispatch: any): Promise<any> => {
  const response = await data.get("data/config.json");

  dispatch({
    type: FETCH_DATA,
    payload: response.data,
  });
};
