import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./app.css";
import { fetchPages } from "../actions/pages";
import { selectPage } from "../actions/selected";
import Pages from "./pages";

class App extends Component {
  componentDidMount() {
    this.props.fetchPages();
  }

  render() {
    const { pages, selected, selectPage } = this.props;

    return (
      <div className="app">
        <Pages pages={pages} selected={selected} selectPage={selectPage} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pages: state.pages,
  selected: state.selected,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchPages,
      selectPage,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
