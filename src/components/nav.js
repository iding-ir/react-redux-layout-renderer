import React, { Component } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";

import "./nav.css";
import Item from "./item";

class Nav extends Component {
  renderItems = () => {
    const { pages, selected, selectPage, showFlash, hideFlash } = this.props;

    return Object.values(pages).map((page) => {
      const slug = slugify(page.title, {
        lower: true,
      });

      return (
        <Link key={page.id} to={`/p/${slug}`}>
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
    return <div className="nav">{this.renderItems()}</div>;
  }
}

export default Nav;
