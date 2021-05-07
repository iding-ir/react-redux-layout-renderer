import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";

import "./Item.scss";
import { selectPage } from "../../actions/page";
import { showFlash, hideFlash } from "../../actions/flash";
import { IPage } from "../../interfaces";
import { IState } from "../../reducers";

interface Props {
  page: IPage;
}

const Item = (props: Props) => {
  const dispatch = useDispatch();

  const selectedPage = useSelector((state: IState) => state.page.selected);

  const { page } = props;

  const { id, title, icon } = page;

  const classes = classnames("item", {
    "is-selected": id === selectedPage,
  });

  const style = {
    WebkitMaskImage: `url(${icon})`,
    maskImage: `url(${icon})`,
  };

  const onClick = () => {
    dispatch(selectPage(id));

    dispatch(showFlash());

    setTimeout(() => {
      dispatch(hideFlash());
    }, 1000);
  };

  return (
    <div className={classes} onClick={() => onClick()}>
      <div className="icon" style={style}></div>

      <div className="title">{title}</div>
    </div>
  );
};

export default Item;
