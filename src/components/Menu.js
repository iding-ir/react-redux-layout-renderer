import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as classnames from "classnames";

import "./Menu.scss";
import Select from "./Select";
import { themeImage, languageImage } from "../utils/images";
import { hideMenu, setTheme, setLanguage } from "../actions/menu";

const Menu = (props) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);
  const menu = useSelector((state) => state.menu);

  const { items } = props;

  const themes = [
    { value: "light", title: "Light" },
    { value: "dark", title: "Dark" },
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
    return items.map((item, index) => {
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
              value={menu.theme}
              items={themes}
              onChange={(theme) => dispatch(setTheme(theme))}
            />

            <Select
              image={languageImage}
              value={menu.language}
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
