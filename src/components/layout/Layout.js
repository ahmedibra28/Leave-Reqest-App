import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/authActions";
import PropTypes from "prop-types";
import logo from "./logo.png";

function Layout(props) {
  const authArea = (
    <ul className="navbar-nav mr-right mb-2 mb-lg-0">
      <li className="nav-item">
        <span className="nav-link">
          {props.auth.user
            ? props.auth.user.first_name
              ? `Welcome  ${props.auth.user.first_name}`
              : `Welcome ${props.auth.user.email}`
            : ""}
        </span>
      </li>

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="cog w-6 h-6">
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Basic Settings
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link to="/department" className="dropdown-item">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="office-building w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clipRule="evenodd"
                />
              </svg>
              Department
            </Link>
          </li>
          <li>
            <Link to="/leave-type" className="dropdown-item">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="device-tablet w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Leave Type
            </Link>
          </li>
          <li>
            <Link to="/employee" className="dropdown-item">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="user-group w-6 h-6"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              Employee
            </Link>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <Link to="/leave-request" className="nav-link">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="paper-airplane w-6 h-6"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          Leave Request
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/report" className="nav-link">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="document-report w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
              clipRule="evenodd"
            />
          </svg>
          Report
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/change-password" className="nav-link">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="user-add w-6 h-6 mr-1"
          >
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
          </svg>
          Change Passord
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" onClick={props.logout} className="nav-link">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="logout w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            ></path>
          </svg>
          Logout
        </Link>
      </li>
    </ul>
  );
  const guestArea = (
    <ul className="navbar-nav mr-right mb-2 mb-lg-0">
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="user-add w-6 h-6"
          >
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
          </svg>
          Singup
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" onClick={props.logout} className="nav-link">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="logout w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            ></path>
          </svg>
          Login
        </Link>
      </li>
    </ul>
  );
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 shadow">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="brand-svg cursor-pointer text-gray-100 md:hidden"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top mr-2"
              alt=""
              loading="lazy"
            />
            LR App
          </Link>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0"></ul>
            {props.auth.isAuthenticated ? authArea : guestArea}
          </div>
        </div>
      </nav>

      <div className="container">{props.children}</div>

      <div className="text-muted card-footer pt-20  text-center">
        Developer Contact -{" "}
        <strong>
          <a href="mailto:ahmaat19@gmail.com">ahmaat19@gmail.com</a>
        </strong>
      </div>
    </>
  );
}

Layout.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Layout);
