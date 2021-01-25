import React from "react";

import "./Footer.scss";

interface Props {
  footer: string;
}

const Footer = (props: Props) => {
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
