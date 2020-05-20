import React from "react";

import "./home.scss";

const Home = (props) => {
  const { title, description } = props.header;

  return (
    <div className="home">
      <div className="title">{title}</div>

      <div className="description">{description}</div>
    </div>
  );
};

Home.defaultProps = {
  header: {
    title: "Layout Renderer",
    description:
      "A themeable, multilingual and responsive layout created by React and Redux.",
  },
};

export default Home;
