import React, { Component } from "react";
import * as classnames from "classnames";

import "./page.css";

class Page extends Component {
  render() {
    const { page, selected, selectPage } = this.props;
    const { id, title } = page;

    const pageClasses = classnames("app-page", {
      "is-selected": id === selected,
    });

    return (
      <div className={pageClasses} onClick={() => selectPage(id)}>
        <div className="app-title">{title}</div>
      </div>
    );
  }
}

export default Page;
