import React from "react";

import "./header.scss";

const Header = (props) => {
  const { title, description } = props.header;

  return (
    <div className="header">
      <div className="title">{title}</div>

      <div className="description">{description}</div>
    </div>
  );
};

Header.defaultProps = {
  header: {
    title: "",
    description: "",
  },
};

export default Header;
