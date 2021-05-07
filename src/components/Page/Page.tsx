import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import classnames from "classnames";
import MarkdownView from "react-showdown";

import "./Page.scss";
import { IPage } from "../../interfaces";
import { IState } from "../../reducers";
import { selectPage, getPageContent } from "../../actions/page";

interface Props {
  pages: IPage[];
}

const Page = (props: Props) => {
  const { pages } = props;

  const dispatch = useDispatch();

  const { slug } = useParams() as any;

  const flash = useSelector((state: IState) => state.flash.visible);
  const pageContent = useSelector((state: IState) => state.page.content);

  if (pages.length === 0) {
    return null;
  }

  const page = Object.values(pages).filter(
    (page: IPage) => page.slug === slug
  )[0];

  const { id, title, content } = page;

  if (page === undefined) {
    return <Redirect to="/404" />;
  }

  dispatch(selectPage(id));

  dispatch(getPageContent(content));

  const classes = classnames("page", {
    "is-flashing": flash,
  });

  return (
    <div className={classes}>
      <div className="title">{title}</div>

      <div className="content">
        <MarkdownView markdown={pageContent || ""} />
      </div>

      <div className="flash"></div>
    </div>
  );
};

export default Page;
