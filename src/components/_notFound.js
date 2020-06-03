import React from "react";

import "./notFound.scss";

const NotFound = (props) => {
  const { title, description } = props.header;

  return (
    <div className="not-found">
      <div className="title">{title}</div>

      <div className="description">{description}</div>
    </div>
  );
};

NotFound.defaultProps = {
  header: {
    title: "404",
    description: "",
  },
};

export default NotFound;
