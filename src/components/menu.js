import React, { Component } from "react";
import * as classnames from "classnames";

import "./menu.css";

class Menu extends Component {
  render() {
    const { hideMenu } = this.props;

    const classes = classnames("menu", {
      "is-visible": this.props.display,
    });

    return (
      <div className={classes}>
        <div className="menu-close" onClick={hideMenu}></div>

        <ul className="list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
