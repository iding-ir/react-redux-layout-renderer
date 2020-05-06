import React, { Component } from "react";

import "./header.css";

class Header extends Component {
  render() {
    const { title, description } = this.props.header;

    return (
      <div className="header">
        <div className="title">{title}</div>

        <div className="description">{description}</div>
      </div>
    );
  }
}

export default Header;
