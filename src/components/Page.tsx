import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import classnames from "classnames";
import showdown from "showdown";

import "./Page.scss";
import { IPage } from "../interfaces";
import { IState } from "../reducers";
import { selectPage } from "../actions/page";

interface Props {
  pages: IPage[];
}

const Page = (props: Props) => {
  const { pages } = props;

  const dispatch = useDispatch();

  const { slug } = useParams() as any;

  const flash = useSelector((state: IState) => state.flash.visible);

  if (pages.length === 0) {
    return null;
  }

  const page = Object.values(pages).filter(
    (page: IPage) => page.slug === slug
  )[0];

  const { title, content } = page;

  if (page === undefined) {
    return <Redirect to="/404" />;
  }

  dispatch(selectPage(page.id));

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
