import React, { Component } from "react";

import "./nav.css";
import Item from "./item";

class Nav extends Component {
  renderItems = () => {
    const { pages, selected, selectPage, showFlash, hideFlash } = this.props;

    return Object.values(pages).map((page) => (
      <Item
        key={page.id}
        page={page}
        selected={selected}
        selectPage={selectPage}
        showFlash={showFlash}
        hideFlash={hideFlash}
      />
    ));
  };

  render() {
    return <div className="nav">{this.renderItems()}</div>;
  }
}

export default Nav;