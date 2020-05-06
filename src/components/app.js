import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./app.css";
import { fetchPages } from "../actions/pages";
import Header from "./header";
import Pages from "./pages";
import Footer from "./footer";

class App extends Component {
  componentDidMount() {
    this.props.fetchPages();
  }

  render() {
    return (
      <div className="app">
        <Header />

        <Pages />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pages: state.pages,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchPages,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
