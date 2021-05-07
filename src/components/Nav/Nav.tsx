import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";

import "./Nav.scss";
import Item from "../Item/Item";
import { toggleMore } from "../../actions/more";
import { showMenu } from "../../actions/menu";
import { IState } from "../../reducers";
import { IPage } from "../../interfaces";
import Logo from "../Logo/Logo";

interface Props {
  pages: IPage[];
}

const Nav = (props: Props) => {
  const { pages } = props;

  const dispatch = useDispatch();

  const more = useSelector((state: IState) => state.more.visible);
  const language = useSelector((state: IState) => state.settings.language);

  const visibleNavItems = (process.env
    .REACT_APP_VISIBLE_NAV_ITEMS as unknown) as number;

  const visiblePages = pages.slice(0, visibleNavItems);
  const hiddenPages = pages.slice(visibleNavItems, pages.length);

  const shouldDisplayMore = pages.length > visibleNavItems;

  const renderItems = (pages: IPage[]) => {
    return Object.values(pages).map((page: IPage) => {
      const { id, slug } = page;

      return (
        <Link key={id} to={`/l/${language}/p/${slug}`}>
          <Item page={page} />
        </Link>
      );
    });
  };

  const renderMore = () =>
    shouldDisplayMore && (
      <div
        className={moreClasses}
        onClick={(event) => {
          event.stopPropagation();

          dispatch(toggleMore());
        }}
      >
        <div className={hiddenClasses}>{renderItems(hiddenPages)}</div>
      </div>
    );

  const moreClasses = classnames("nav-more", {
    "is-visible": hiddenPages.length,
  });

  const hiddenClasses = classnames("nav-hidden", {
    "is-visible": more,
  });

  return (
    <div className="nav">
      <div className="menu-open" onClick={() => dispatch(showMenu())}></div>

      {renderItems(visiblePages)}

      {renderMore()}

      <Logo />
    </div>
  );
};

export default Nav;
