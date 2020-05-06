import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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

    return (
      <div className="app">
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
