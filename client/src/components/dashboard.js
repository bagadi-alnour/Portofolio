import React, { Component } from "react";
import { Helmet } from "react-helmet";
import DashboardNavbar from "./dashboard-navbar";
export default class dashboard extends Component {
  render() {
    return (
      <div className="container text-white">
        <Helmet>
          <title>Portfolio | Home</title>
        </Helmet>
        <DashboardNavbar />
      </div>
    );
  }
}
