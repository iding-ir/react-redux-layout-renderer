import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import slugify from "slugify";

import "./app.scss";
import { fetchData } from "../actions/data";
import { selectPage, hideMore, toggleMore } from "../actions/page";
import { showFlash, hideFlash } from "../actions/flash";
import { showMenu, hideMenu, setTheme, setLanguage } from "../actions/menu";
import Home from "./home";
import NotFound from "./notFound";
import Nav from "./nav";
import Page from "./page";
import Footer from "./footer";
import Menu from "./menu";
import { slugifySettings } from "../utils/settings";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();

    this.fetchStorage();
  }

  fetchStorage = () => {
    const { setTheme, setLanguage } = this.props;

    const theme = localStorage.getItem("theme");
    setTheme(theme);

    const language = localStorage.getItem("language");
    setLanguage(language);
  };

  render() {
    const {
      menu,
      data,
      selectedPage,
      more,
      flash,
      selectPage,
      hideMore,
      toggleMore,
      showFlash,
      hideFlash,
      showMenu,
      hideMenu,
      setTheme,
      setLanguage,
    } = this.props;

    const { visible, theme, language } = menu;

    const currentData = data[language] || data[Object.keys(data)[0]];

    const { header, pages, footer, menuItems } = currentData;

    const routeRenderer = ({ match }) => {
      const { slug } = match.params;

      const page = Object.values(pages).filter(
        (item) => slugify(item.title, slugifySettings) === slug
      )[0];

      if (page !== undefined) {
        setTimeout(() => {
          selectPage(page.id);
        }, 0);
      }
    };

    return (
      <Router>
        <div className="app" theme={menu.theme} onClick={hideMore}>
          <Switch>
            <Route exact path="/" render={() => <Home header={header} />} />

            <Route exact path="/p/:slug" render={routeRenderer} />

            <Route path="*" component={NotFound} />
          </Switch>

          <Nav
            pages={pages}
            selectedPage={selectedPage}
            more={more}
            selectPage={selectPage}
            showFlash={showFlash}
            hideFlash={hideFlash}
            showMenu={showMenu}
            toggleMore={toggleMore}
          />

          <Page pages={pages} selectedPage={selectedPage} flash={flash} />

          <Footer footer={footer} />

          <Menu
            data={data}
            items={menuItems}
            theme={theme}
            language={language}
            visible={visible}
            hideMenu={hideMenu}
            setTheme={setTheme}
            setLanguage={setLanguage}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  selectedPage: state.page.selected,
  more: state.page.more,
  flash: state.flash,
  menu: state.menu,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchData,
      selectPage,
      hideMore,
      toggleMore,
      showFlash,
      hideFlash,
      showMenu,
      hideMenu,
      setTheme,
      setLanguage,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
