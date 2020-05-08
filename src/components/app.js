import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { HashRouter as Router, Route } from "react-router-dom";
import slugify from "slugify";

import "./app.scss";
import { fetchData } from "../actions/data";
import { selectPage } from "../actions/page";
import { showFlash, hideFlash } from "../actions/flash";
import { showMenu, hideMenu, changeTheme, changeLocale } from "../actions/menu";
import Header from "./header";
import Nav from "./nav";
import Page from "./page";
import Footer from "./footer";
import Menu from "./menu";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const {
      data,
      selectedPage,
      flash,
      selectPage,
      showFlash,
      hideFlash,
      showMenu,
      hideMenu,
      changeTheme,
      changeLocale,
      menu,
    } = this.props;

    const current = data[menu.locale] || data[Object.keys(data)[0]];

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
        <div className="app" theme={menu.theme}>
          <Route path="/p/:page" render={render} />

          <Nav
            pages={pages}
            selectedPage={selectedPage}
            selectPage={selectPage}
            showFlash={showFlash}
            hideFlash={hideFlash}
            showMenu={showMenu}
          />

          <Header header={header} />

          <Page pages={pages} selectedPage={selectedPage} flash={flash} />

          <Footer footer={footer} />

          <Menu
            data={data}
            display={menu.visible}
            hideMenu={hideMenu}
            items={menuItems}
            changeTheme={changeTheme}
            changeLocale={changeLocale}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  selectedPage: state.page.selected,
  flash: state.flash,
  menu: state.menu,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchData,
      selectPage,
      showFlash,
      hideFlash,
      showMenu,
      hideMenu,
      changeTheme,
      changeLocale,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
