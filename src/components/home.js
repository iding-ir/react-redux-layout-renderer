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
    title: "",
    description: "",
  },
};

export default Home;
