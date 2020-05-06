import React, { Component } from "react";

import "./pages.css";
import Page from "./page";

class Pages extends Component {
  renderPages = () => {
    return Object.values(this.props.pages).map((page) => {
      return <Page key={page.id} page={page} />;
    });
  };

  render() {
    return <div className="app-pages">{this.renderPages()}</div>;
  }
}

export default Pages;
