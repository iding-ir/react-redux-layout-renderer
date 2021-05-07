import { IStateData } from "../reducers/data";
import { initialData } from "../reducers/data";

export const useData = (data: IStateData, language: string) => {
  const currentData = data[language] || initialData;

  const { splash, pages, footer, notFound, menuItems } = currentData;

  return { splash, pages, footer, notFound, menuItems };
};
