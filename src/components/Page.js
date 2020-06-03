import React from "react";
import * as classnames from "classnames";
import showdown from "showdown";

import "./Page.scss";

const Page = (props) => {
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
