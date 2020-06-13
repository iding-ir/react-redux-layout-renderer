import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as classnames from "classnames";

import "./Item.scss";
import { selectPage } from "../actions/page";
import { showFlash, hideFlash } from "../actions/flash";

const Item = (props) => {
  const dispatch = useDispatch();

  const selectedPage = useSelector((state) => state.page.selected);

  const { page } = props;

  const { id, title, icon } = page;

  const classes = classnames("item", {
    "is-selected": id === selectedPage,
  });

  const style = {
    WebkitMaskImage: `url(${icon})`,
    maskImage: `url(${icon})`,
  };

  const onClick = (id) => {
    dispatch(selectPage(id));

    dispatch(showFlash());

    setTimeout(() => {
      dispatch(hideFlash());
    }, 1000);
  };

  return (
    <div className={classes} onClick={() => onClick(id)}>
      <div className="icon" style={style}></div>

      <div className="title">{title}</div>
    </div>
  );
};

export default Item;
