import React, { Component, PropTypes } from "react";
import {IndexLink } from "react-router";
import UserProfile from "./UserProfile";
import Alerts from "./Alerts";
import "./header.css";

export default class Header extends Component {
  onLogoutClick = event => {
    event.preventDefault();
    this.props.handleLogout();
  };

  render() {

    return (
      <nav
        className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top"
      >
        <button
          type="button"
          className="navbar-toggler navbar-toggler-right"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <IndexLink to="/" className="navbar-brand">
          <div title="Home" className="brand" />
          Home
        </IndexLink>
        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">

          </ul>

          <ul className="navbar-nav mt-2 mt-md-0">
            <Alerts />
            <UserProfile user={'test'} handleLogout={this.onLogoutClick} />
          </ul>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string,
  handleLogout: PropTypes.func.isRequired,
  location: React.PropTypes.object
};
