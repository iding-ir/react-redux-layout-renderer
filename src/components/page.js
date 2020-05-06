import React, { Component } from "react";

import "./page.css";

class Page extends Component {
  render() {
    const { pages, selected } = this.props;
    const { title, content } =
      Object.values(pages).filter((page) => page.id === selected)[0] || {};

    return (
      <div className="page">
        <div className="title">{title}</div>

        <div className="content">{content}</div>
      </div>
    );
  }
}

export default Page;
