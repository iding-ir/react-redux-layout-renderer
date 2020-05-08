import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { HashRouter as Router, Route } from "react-router-dom";
import slugify from "slugify";

import "./app.scss";
import { fetchData } from "../actions/data";
import { selectPage, hideMore, toggleMore } from "../actions/page";
import { showFlash, hideFlash } from "../actions/flash";
import {
  showMenu,
  hideMenu,
  changeTheme,
  changeLanguage,
} from "../actions/menu";
import Header from "./header";
import Nav from "./nav";
import Page from "./page";
import Footer from "./footer";
import Menu from "./menu";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();

    this.fetchStorage();
  }

  fetchStorage = () => {
    const { changeTheme, changeLanguage } = this.props;

    const theme = localStorage.getItem("theme");
    changeTheme(theme);

    const language = localStorage.getItem("language");
    changeLanguage(language);
  };

  render() {
    const {
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
      changeTheme,
      changeLanguage,
      menu,
    } = this.props;

    const current = data[menu.language] || data[Object.keys(data)[0]];

    const { header, pages, footer, menu: menuItems } = current;

    const render = ({ match }) => {
      const { page: slug } = match.params;

      const page = Object.values(pages).filter((item) => {
        const itemSlug = slugify(item.title, {
          lower: true,
          strict: true,
        });

        return itemSlug === slug;
      })[0];

      if (page === undefined) {
        return;
      }

      setTimeout(() => {
        selectPage(page.id);
      }, 0);
    };

    return (
      <Router>
        <div className="app" theme={menu.theme} onClick={hideMore}>
          <Route path="/p/:page" render={render} />

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

          <Header header={header} />

          <Page pages={pages} selectedPage={selectedPage} flash={flash} />

          <Footer footer={footer} />

          <Menu
            data={data}
            display={menu.visible}
            hideMenu={hideMenu}
            items={menuItems}
            theme={menu.theme}
            language={menu.language}
            changeTheme={changeTheme}
            changeLanguage={changeLanguage}
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
      changeTheme,
      changeLanguage,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
