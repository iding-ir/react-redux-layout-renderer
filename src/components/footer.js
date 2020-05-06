import React, { Component } from "react";

import "./footer.css";

class Footer extends Component {
  render() {
    const { footer } = this.props;

    return <div className="footer">{footer}</div>;
  }
}

export default Footer;
