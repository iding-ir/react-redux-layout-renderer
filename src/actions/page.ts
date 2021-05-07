import { SELECT_PAGE, GET_PAGE_CONTENT } from "../constants";
import data from "../apis/data";

export interface IAction {
  type: string;
  payload: string | number | null;
}

export const selectPage = (id: number | null): IAction => {
  return {
    type: SELECT_PAGE,
    payload: id,
  };
};

export const getPageContent = (content: string | null) => async (
  dispatch: any
): Promise<any> => {
  const response = await data.get(`${content}`);

  dispatch({
    type: GET_PAGE_CONTENT,
    payload: response.data,
  });
};
