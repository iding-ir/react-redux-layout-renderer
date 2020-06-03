import React from "react";
import * as classnames from "classnames";

import "./Item.scss";

const Item = (props) => {
  const { page, selectedPage, selectPage, showFlash, hideFlash } = props;

  const { id, title, icon } = page;

  const classes = classnames("item", {
    "is-selected": id === selectedPage,
  });

  const style = {
    WebkitMaskImage: `url(${icon})`,
    maskImage: `url(${icon})`,
  };

  const onClick = (id) => {
    selectPage(id);

    showFlash();

    setTimeout(() => {
      hideFlash();
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
