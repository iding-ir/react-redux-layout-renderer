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
import { selectPage, hideMore } from "../actions/page";
import { setTheme, setLanguage } from "../actions/menu";
import Splash from "./Splash";
import NotFound from "./NotFound";
import Nav from "./Nav";
import Page from "./Page";
import Footer from "./Footer";
import Menu from "./Menu";

const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);
  const flash = useSelector((state) => state.flash);
  const menu = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchData());

    const theme = localStorage.getItem("theme");
    const language = localStorage.getItem("language");

    dispatch(setTheme(theme));
    dispatch(setLanguage(language));
  }, []);

  const { language } = menu;
  const currentData = data[language] || data[Object.keys(data)[0]];
  const { splash, pages, footer, notFound, menuItems } = currentData;

  const splashRouteRenderer = ({ match }) => {
    const { language } = match.params;

    setTimeout(() => {
      dispatch(setLanguage(language));
    }, 0);

    return <Splash header={splash} />;
  };

  const pageRouteRenderer = ({ match }) => {
    const { slug } = match.params;

    const page = Object.values(pages).filter((page) => page.slug === slug)[0];

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
        theme={menu.theme}
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
