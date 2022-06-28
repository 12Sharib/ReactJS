import React from "react";
import PropTypes from "prop-types";



export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="home">
                Home
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="home">{props.about}</a>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          } mx-5`}
        >
          <input
            className="form-check-input"
            onClick={props.enableDarkMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className="form-check-label text"
            htmlFor="flexSwitchCheckDefault"
          >
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
//yha par hamm decide karte h; jo hmara data pass hua vo string hoga ya kuch aur;
Navbar.prototype = { title: PropTypes.string.isRequired };