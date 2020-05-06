import React, { Component } from "react";

import "./page.css";

class Page extends Component {
  render() {
    const { id, title, content } = this.props.page;

    return (
      <div>
        <div>{title}</div>

        <div>{content}</div>
      </div>
    );
  }
}

export default Page;
