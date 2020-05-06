import React, { Component } from "react";
import * as classnames from "classnames";

import "./page.css";

class Page extends Component {
  render() {
    const { pages, selected, flash } = this.props;

    if (selected === null) {
      return null;
    }

    const { title, content } = Object.values(pages).filter(
      (page) => page.id === selected
    )[0];

    const classes = classnames("page", {
      "is-flashing": flash,
    });

    return (
      <div className={classes}>
        <div className="title">{title}</div>

        <div className="content">{content}</div>

        <div className="flash"></div>
      </div>
    );
  }
}

export default Page;
