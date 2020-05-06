import React, { Component } from "react";
import * as classnames from "classnames";

import "./item.css";

class Item extends Component {
  render() {
    const { page, selected, selectPage } = this.props;
    const { id, title, icon } = page;

    const pageClasses = classnames("item", {
      "is-selected": id === selected,
    });

    const style = {
      backgroundImage: `url(${icon})`,
    };

    return (
      <div className={pageClasses} onClick={() => selectPage(id)}>
        <div className="icon" style={style}></div>

        <div className="title">{title}</div>
      </div>
    );
  }
}

export default Item;
