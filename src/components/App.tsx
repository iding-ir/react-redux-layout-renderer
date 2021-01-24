import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import { fetchData } from "../actions/data";
import { hideMore } from "../actions/more";
import Splash from "./Splash";
import NotFound from "./NotFound";
import Nav from "./Nav";
import Page from "./Page";
import Footer from "./Footer";
import Menu from "./Menu";
import Language from "./Language";
import { IState } from "../reducers";
import { initialData } from "../reducers/data";

const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: IState) => state.data);
  const settings = useSelector((state: IState) => state.settings);

  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { theme, language } = settings;

  const currentData = data[language] || initialData;

  const { splash, pages, footer, notFound, menuItems } = currentData;

  return (
    <Router>
      <div
        className="app"
        data-theme={theme}
        onClick={() => dispatch(hideMore())}
      >
        <Switch>
          <Route exact path="/">
            <Splash header={splash} />
          </Route>

          <Route exact path="/l/:language">
            <Language />
          </Route>

          <Route exact path="/p/:slug">
            <Page pages={pages} />
          </Route>

          <Route path="*">
            <NotFound header={notFound} />
          </Route>
        </Switch>

        <Nav pages={pages} />

        <Footer footer={footer} />

        <Menu items={menuItems} />
      </div>
    </Router>
  );
};

export default App;
