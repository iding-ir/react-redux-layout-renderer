import React from "react";
import { Link } from "react-router-dom";
import * as classnames from "classnames";

import "./nav.scss";
import Item from "./item";

const Nav = (props) => {
  const {
    pages,
    selectedPage,
    more,
    selectPage,
    showFlash,
    hideFlash,
    showMenu,
    toggleMore,
  } = props;

  const renderItems = (pages) => {
    return Object.values(pages).map((page) => {
      const { id, slug } = page;

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

  const visiblePages = pages.slice(0, process.env.REACT_APP_VISIBLE_NAV_ITEMS);
  const hiddenPages = pages.slice(
    process.env.REACT_APP_VISIBLE_NAV_ITEMS,
    pages.length
  );

  const visiblePagesRendered = renderItems(visiblePages);
  const hiddenPagesRendered = renderItems(hiddenPages);

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
};

export default Nav;
