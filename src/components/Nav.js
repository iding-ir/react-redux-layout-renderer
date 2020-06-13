import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as classnames from "classnames";

import "./Nav.scss";
import Item from "./Item";
import { toggleMore } from "../actions/page";
import { showMenu } from "../actions/menu";

const Nav = (props) => {
  const dispatch = useDispatch();

  const more = useSelector((state) => state.page.more);

  const { pages } = props;

  const renderItems = (pages) => {
    return Object.values(pages).map((page) => {
      const { id, slug } = page;

      return (
        <Link key={id} to={`/p/${slug}`}>
          <Item page={page} />
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
      <div className="menu-open" onClick={() => dispatch(showMenu())}></div>

      {visiblePagesRendered}

      <div
        className={moreClasses}
        onClick={(event) => {
          event.stopPropagation();

          dispatch(toggleMore());
        }}
      >
        <div className={hiddenClasses}>{hiddenPagesRendered}</div>
      </div>
    </div>
  );
};

export default Nav;
