import React from "react";
import * as classnames from "classnames";
import showdown from "showdown";

import "./page.scss";

const Page = (props) => {
  const { pages, selectedPage, flash } = props;

  if (selectedPage === null) {
    return null;
  }

  const { title, content } = pages.filter(
    (page) => page.id === selectedPage
  )[0];

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
