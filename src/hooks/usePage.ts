import { IPage } from "../interfaces";

export const usePage = (pages: IPage[], slug: string) => {
  const page = Object.values(pages).filter(
    (page: IPage) => page.slug === slug
  )[0];

  const { id, title, content } = page || {};

  return { page, id, title, content };
};
