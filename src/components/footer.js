import React from "react";

import "./footer.scss";

const Footer = (props) => {
  const { footer } = props;

  return <div className="footer">{footer}</div>;
};

Footer.defaultProps = {
  footer: (
    <span>
      Created by <a href="http://iding.ir">Aydin Ghane Kh.</a>
    </span>
  ),
};

export default Footer;
