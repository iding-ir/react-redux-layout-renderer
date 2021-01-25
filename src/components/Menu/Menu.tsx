import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import "./Menu.scss";
import Select from "../Select/Select";
import { themeImage, languageImage } from "../../utils/images";
import { hideMenu } from "../../actions/menu";
import { setTheme, setLanguage } from "../../actions/settings";
import { IState } from "../../reducers";
import { IMenuItem } from "../../interfaces";

interface Props {
  items: IMenuItem[];
}

const Menu = (props: Props) => {
  const { items } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const data = useSelector((state: IState) => state.data);
  const menu = useSelector((state: IState) => state.menu);
  const settings = useSelector((state: IState) => state.settings);

  const themes = [
    { value: "light", title: t("menu.theme.light") },
    { value: "dark", title: t("menu.theme.dark") },
  ];

  const languages = Object.keys(data).map((key) => {
    return {
      value: key,
      title: data[key].language,
    };
  });

  const classes = classnames("menu", {
    "is-visible": menu.visible,
  });

  const renderMenuItems = () => {
    return items.map((item: IMenuItem, index: number) => {
      const { url, title } = item;

      return (
        <li key={index}>
          {url ? <a href={url}>{title}</a> : <span>{title}</span>}
        </li>
      );
    });
  };

  return (
    <div className={classes}>
      <div className="menu-close" onClick={() => dispatch(hideMenu())}></div>

      <div className="menu-container">
        <div className="settings">
          <form>
            <Select
              image={themeImage}
              defaultValue={settings.theme}
              items={themes}
              onChange={(theme) => dispatch(setTheme(theme))}
            />

            <Select
              image={languageImage}
              defaultValue={settings.language}
              items={languages}
              onChange={(language) => dispatch(setLanguage(language))}
            />
          </form>
        </div>

        <ul>{renderMenuItems()}</ul>
      </div>
    </div>
  );
};

export default Menu;
