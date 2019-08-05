import React, { Component } from "react";
import $ from "jquery";
import { Layout } from "antd";
import "./App.less";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import AxiosData from "@/utils/axios";
import "./config/common.less";


import RouteMap from "./Route";
import { connect } from "react-redux";
import Bottom from "./component/Bottom";

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class App extends Component {
  render() {
    return (
      <div>
        <RouteMap />
        <Bottom />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
