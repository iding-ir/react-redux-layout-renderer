import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchPages } from "../actions/pages";

class App extends Component {
  componentDidMount() {
    this.props.fetchPages();
  }

  render() {
    return "app";
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
