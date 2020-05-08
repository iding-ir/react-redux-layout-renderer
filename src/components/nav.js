import React, { Component } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";

import "./nav.css";
import Item from "./item";

class Nav extends Component {
  renderItems = () => {
    const { pages, selected, selectPage, showFlash, hideFlash } = this.props;

    return Object.values(pages).map((page) => {
      const { id, title } = page;

      const slug = slugify(title, {
        lower: true,
        strict: true,
      });

      return (
        <Link key={id} to={`/p/${slug}`}>
          <Item
            page={page}
            selected={selected}
            selectPage={selectPage}
            showFlash={showFlash}
            hideFlash={hideFlash}
          />
        </Link>
      );
    });
  };

  render() {
    const { showMenu } = this.props;

    return (
      <div className="nav">
        <div className="menu-open" onClick={showMenu}></div>

        {this.renderItems()}
      </div>
    );
  }
}

export default Nav;
