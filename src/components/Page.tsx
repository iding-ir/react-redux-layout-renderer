import React from "react";
import classnames from "classnames";
import showdown from "showdown";

import "./Page.scss";
import { IPage } from "../interfaces";

interface Props {
  page: IPage;
  flash: boolean;
}

const Page = (props: Props) => {
  const { page, flash } = props;

  const { title, content } = page;

  const classes = classnames("page", {
    "is-flashing": flash,
  });

  const converter = new showdown.Converter();

  return (
    <div className={classes}>
      <div className="title">{title}</div>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
      ></div>

      <div className="flash"></div>
    </div>
  );
};

export default Page;
