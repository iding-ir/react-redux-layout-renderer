import React, { Component } from "react";
import * as classnames from "classnames";

import "./item.css";

class Item extends Component {
  render() {
    const { page, selected, selectPage, showFlash, hideFlash } = this.props;
    const { id, title, icon } = page;

    const classes = classnames("item", {
      "is-selected": id === selected,
    });

    const style = {
      backgroundImage: `url(${icon})`,
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
  }
}

export default Item;