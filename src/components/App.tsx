import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.scss";
import { fetchData } from "../actions/data";
import { selectPage } from "../actions/page";
import { hideMore } from "../actions/more";
import { setTheme, setLanguage } from "../actions/settings";
import Splash from "./Splash";
import NotFound from "./NotFound";
import Nav from "./Nav";
import Page, { IPage } from "./Page";
import Footer from "./Footer";
import Menu from "./Menu";
import { IState } from "../reducers";

const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: IState) => state.data);
  const flash = useSelector((state: IState) => state.flash.visible);
  const settings = useSelector((state: IState) => state.settings);

  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { language } = settings;
  const currentData = data[language];

  const { splash, pages, footer, notFound, menuItems } = currentData;

  const splashRouteRenderer = (props: any) => {
    const { match } = props;
    const { language } = match.params;

    setTimeout(() => {
      dispatch(setLanguage(language));
    }, 0);

    return <Splash header={splash} />;
  };

  const pageRouteRenderer = (props: any) => {
    const { match } = props;
    const { slug } = match.params;

    const page = Object.values(pages).filter(
      (page: any) => page.slug === slug
    )[0] as IPage;

    if (pages.length === 0) {
      return "";
    }

    if (page === undefined) {
      return <Redirect to="/404" />;
    }

    setTimeout(() => {
      dispatch(selectPage(page.id));
    }, 0);

    return <Page page={page} flash={flash} />;
  };

  return (
    <Router>
      <div
        className="app"
        data-theme={settings.theme}
        onClick={() => dispatch(hideMore())}
      >
        <Switch>
          <Route exact path="/" render={() => <Splash header={splash} />} />

          <Route exact path="/l/:language" render={splashRouteRenderer} />

          <Route exact path="/p/:slug" render={pageRouteRenderer} />

          <Route path="*" render={() => <NotFound header={notFound} />} />
        </Switch>

        <Nav pages={pages} />

        <Footer footer={footer} />

        <Menu items={menuItems} />
      </div>
    </Router>
  );
};

export default App;
