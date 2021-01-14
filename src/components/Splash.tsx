import React from "react";

import "./Splash.scss";

export interface IHeader {
  title: string;
  description: string;
}

interface Props {
  header: IHeader;
}

const Splash = (props: Props) => {
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
} as Partial<Props>;

export default Splash;
