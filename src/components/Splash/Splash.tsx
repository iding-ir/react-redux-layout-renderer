import React from "react";

import "./Splash.scss";
import { IHeader } from "../../interfaces";

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
