import React, { Component } from "react";

import "./footer.scss";

class Footer extends Component {
  render() {
    const { footer } = this.props;

    return <div className="footer">{footer}</div>;
  }
}

export default Footer;
