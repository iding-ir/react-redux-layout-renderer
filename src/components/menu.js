import React, { Component } from "react";
import * as classnames from "classnames";

import "./menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.theme = React.createRef();
    this.locale = React.createRef();
  }

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
              <div className="form-group">
                <select
                  ref={this.theme}
                  onChange={() => changeTheme(this.theme.current.value)}
                >
                  <option value="light">Light</option>

                  <option value="dark">Dark</option>
                </select>
              </div>

              <div className="form-group">
                <select
                  ref={this.locale}
                  onChange={() => changeLocale(this.locale.current.value)}
                >
                  <option value="en">English</option>

                  <option value="de">German</option>
                </select>
              </div>
            </form>
          </div>

          <ul>{renderMenuItems()}</ul>
        </div>
      </div>
    );
  }
}

export default Menu;
