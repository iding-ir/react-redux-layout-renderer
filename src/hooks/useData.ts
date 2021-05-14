import { IStateData } from "../reducers/data";
import { initialData } from "../reducers/data";

export const useData = (data: IStateData, lang: string) => {
  const currentData = data[lang] || initialData;

  const { language, logo, flash, splash, notFound, footer, menuItems, pages } =
    currentData;

  return { language, logo, flash, splash, notFound, footer, menuItems, pages };
};
