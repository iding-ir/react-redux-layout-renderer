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
  background: string;
}

export interface IData {
  language: string;
  logo: string;
  flash: string;
  splash: IHeader;
  notFound: IHeader;
  footer: string;
  menuItems: IMenuItem[];
  pages: IPage[];
}
