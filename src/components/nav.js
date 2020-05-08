import React, { Component } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import * as classnames from "classnames";

import "./nav.scss";
import Item from "./item";

class Nav extends Component {
  renderItems = (pages) => {
    const { selectedPage, selectPage, showFlash, hideFlash } = this.props;

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
            selectedPage={selectedPage}
            selectPage={selectPage}
            showFlash={showFlash}
            hideFlash={hideFlash}
          />
        </Link>
      );
    });
  };

  render() {
    const { pages, showMenu, more, toggleMore } = this.props;

    const visiblePages = pages.slice(0, 4);
    const hiddenPages = pages.slice(4, pages.length);

    const visiblePagesRendered = this.renderItems(visiblePages);
    const hiddenPagesRendered = this.renderItems(hiddenPages);

    const moreClasses = classnames("nav-more", {
      "is-visible": hiddenPages.length,
    });

    const hiddenClasses = classnames("nav-hidden", {
      "is-visible": more,
    });

    return (
      <div className="nav">
        <div className="menu-open" onClick={showMenu}></div>

        {visiblePagesRendered}

        <div
          className={moreClasses}
          onClick={(event) => {
            event.stopPropagation();

            toggleMore();
          }}
        >
          <div className={hiddenClasses}>{hiddenPagesRendered}</div>
        </div>
      </div>
    );
  }
}

export default Nav;
