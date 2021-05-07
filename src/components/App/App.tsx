import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import { fetchData } from "../../actions/data";
import { hideMore } from "../../actions/more";
import Splash from "../Splash/Splash";
import NotFound from "../NotFound/NotFound";
import Nav from "../Nav/Nav";
import Page from "../Page/Page";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Language from "../Language/Language";
import { IState } from "../../reducers";
import { useData } from "../../hooks/useData";

const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: IState) => state.data);
  const settings = useSelector((state: IState) => state.settings);

  const { theme, language } = settings;

  const { splash, pages, footer, notFound, menuItems } = useData(
    data,
    language
  );

  useEffect(() => {
    dispatch(fetchData());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    dispatch(hideMore());
  };

  return (
    <Router>
      <div className="app" data-theme={theme} onClick={handleClick}>
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

          <Route exact path="/l/:language/p/:slug">
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
