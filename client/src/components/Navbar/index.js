import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src="/images/brand_logo.png" alt="logo" />
        </Link>
        <Link className="navbar-burger burger" to=""
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/admin">
            Admin
          </Link>
        </div>

        <div className="navbar-end">
          <Link className="navbar-item" to="/comments">
            <span className="icon">
              <i className="fas fa-comment" style={{ color: "white" }} />
            </span>
          </Link>
          <Link className="navbar-item" to="/favorites">
            <span className="icon navbar-item">
              <i className="fas fa-star" style={{ color: "yellow" }}/>
            </span>
          </Link>

          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary" to="">
                <strong>Log in</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    /* <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Google Books Search
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/" || window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }>
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav> */
  );
}

export default Navbar;
