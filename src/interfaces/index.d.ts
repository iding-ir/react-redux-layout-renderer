export interface IHeader {
  title: string;
  description: string;
}

export interface IMenuItem {
  title: string;
  url: string;
}

export interface ISelect {
  title: string;
  value: string;
}

export interface IPage {
  id: number;
  title: string;
  content: string;
  icon: string;
  slug: string;
}

export interface IData {
  language: string;
  header: IHeader;
  footer: string;
  pages: IPage[];
  menuItems: IMenuItem[];
  splash: IHeader;
  notFound: IHeader;
}
