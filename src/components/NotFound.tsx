import React from "react";

import "./NotFound.scss";
import { IHeader } from "../interfaces";

interface Props {
  header: IHeader;
}

const NotFound = (props: Props) => {
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
} as Partial<Props>;

export default NotFound;
