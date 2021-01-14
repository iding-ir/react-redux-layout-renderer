import { FETCH_DATA } from "../constants";
import { IAction } from "../actions/data";
import { IHeader } from "../components/Splash";

export interface IStateData {
  [key: string]: {
    language: string;
    header: {
      title: string;
      description: string;
    };
    footer: string;
    pages: any[];
    menuItems: any[];
    splash: IHeader;
    notFound: IHeader;
  };
}

const initialState: IStateData = {
  en: {
    language: "",
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
  },
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
