import React from "react";

import "./footer.scss";

const Footer = (props) => {
  const { footer } = props;

  return <div className="footer">{footer}</div>;
};

export default Footer;
