import React, { Component } from "react";
import * as classnames from "classnames";

import "./menu.scss";
import Select from "./select";
import { theme, language } from "../utils/icons";

class Menu extends Component {
  render() {
    const {
      data,
      items,
      display,
      hideMenu,
      changeTheme,
      changeLanguage,
    } = this.props;

    const classes = classnames("menu", {
      "is-visible": display,
    });

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
        <div className="menu-close" onClick={hideMenu}></div>

        <div className="menu-container">
          <div className="settings">
            <form>
              <Select
                image={theme}
                value="dark"
                items={themes}
                onChange={changeTheme}
              />

              <Select
                image={language}
                value="en"
                items={languages}
                onChange={changeLanguage}
              />
            </form>
          </div>

          <ul>{renderMenuItems()}</ul>
        </div>
      </div>
    );
  }
}

export default Menu;
