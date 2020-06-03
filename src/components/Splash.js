import React from "react";

import "./Splash.scss";

const Splash = (props) => {
  const { title, description } = props.header;

  return (
    <div className="splash">
      <div className="title">{title}</div>

      <div className="description">{description}</div>
    </div>
  );
};

Splash.defaultProps = {
  header: {
    title: "",
    description: "",
  },
};

export default Splash;
