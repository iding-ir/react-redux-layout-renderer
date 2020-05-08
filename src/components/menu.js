import React, { Component } from "react";
import * as classnames from "classnames";

import "./menu.scss";
import Select from "./select";

class Menu extends Component {
  render() {
    const { items, display, hideMenu, changeTheme, changeLocale } = this.props;

    const classes = classnames("menu", {
      "is-visible": display,
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
                value="dark"
                items={[
                  { value: "light", title: "Light" },
                  { value: "dark", title: "Dark" },
                ]}
                onChange={changeTheme}
              />

              <Select
                value="en"
                items={[
                  { value: "en", title: "English" },
                  { value: "de", title: "Deutsch" },
                ]}
                onChange={changeLocale}
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
