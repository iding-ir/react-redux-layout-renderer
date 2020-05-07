import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import slugify from "slugify";

import "./app.css";
import { fetchData } from "../actions/app";
import { selectPage } from "../actions/selected";
import { showFlash, hideFlash } from "../actions/flash";
import Header from "./header";
import Nav from "./nav";
import Page from "./page";
import Footer from "./footer";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const {
      app,
      selected,
      flash,
      selectPage,
      showFlash,
      hideFlash,
    } = this.props;

    const { header, footer, pages } = app;

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
        <div className="app">
          <Route path="/p/:page" render={render} />

          <Nav
            pages={pages}
            selected={selected}
            selectPage={selectPage}
            showFlash={showFlash}
            hideFlash={hideFlash}
          />

          <Header header={header} />

          <Page pages={pages} selected={selected} flash={flash} />

          <Footer footer={footer} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
  selected: state.selected,
  flash: state.flash,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchData,
      selectPage,
      showFlash,
      hideFlash,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
