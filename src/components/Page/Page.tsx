import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import classnames from "classnames";
import MarkdownView from "react-showdown";

import "./Page.scss";
import { IPage } from "../../interfaces";
import { IState } from "../../reducers";
import { selectPage, getPageContent } from "../../actions/page";
import { useData } from "../../hooks/useData";
import { usePage } from "../../hooks/usePage";
import { setLanguage } from "../../actions/settings";

interface Props {
  pages: IPage[];
}

const Page = (props: Props) => {
  const { pages } = props;

  const dispatch = useDispatch();

  const { language, slug } = useParams() as any;

  const data = useSelector((state: IState) => state.data);
  const flashVisible = useSelector((state: IState) => state.flash.visible);
  const pageContent = useSelector((state: IState) => state.page.content);
  const settings = useSelector((state: IState) => state.settings);

  const { flash } = useData(data, language);
  const { page, id, title, content, background } = usePage(pages, slug);

  useEffect(() => {
    dispatch(selectPage(id));

    dispatch(getPageContent(content));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    dispatch(setLanguage(language || settings.language));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  if (pages.length === 0) {
    return null;
  }

  if (page === undefined) {
    return <Redirect to="/404" />;
  }

  const classes = classnames("page", {
    "is-flashing": flashVisible,
  });

  const styles = {
    content: {
      backgroundImage: `url("${background}")`,
    },
    flash: {
      backgroundImage: `url("${flash}")`,
    },
  };

  return (
    <div className={classes}>
      <div className="title">{title}</div>

      <div className="content" style={styles.content}>
        <MarkdownView markdown={pageContent || ""} />
      </div>

      <div className="flash" style={styles.flash}></div>
    </div>
  );
};

export default Page;
