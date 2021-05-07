import { FETCH_DATA } from "../constants";
import { IAction } from "../actions/data";
import { IData } from "../interfaces";

export const initialData = {
  language: "",
  logo: "",
  header: {
    title: "",
    description: "",
  },
  footer: "",
  pages: [],
  menuItems: [],
  splash: {
    title: "",
    description: "",
  },
  notFound: {
    title: "",
    description: "",
  },
};
export interface IStateData {
  [key: string]: IData;
}

const initialState: IStateData = {
  en: initialData,
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...action.payload };
    default:
      return state;
  }
};

export default reducer;
