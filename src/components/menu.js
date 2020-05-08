import React, { Component } from "react";
import * as classnames from "classnames";

import "./menu.css";

class Menu extends Component {
  render() {
    const { items, display, hideMenu } = this.props;

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

        <ul className="list">{renderMenuItems()}</ul>
      </div>
    );
  }
}

export default Menu;
