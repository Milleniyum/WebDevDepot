import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function adminLoaded(event, setTab) {
  if (window.location.href.includes("/admin")) {
    event.preventDefault();
  } else {
    setTab("");
  }
}

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav
      className="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/images/brand_logo.png" alt="logo" />
        </a>
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
          {props.isAdmin ? <Link onClick={event => adminLoaded(event, props.setTab)} className="navbar-item" to="/admin">
            Admin
          </Link> : ""}
        </div>

        <div className="navbar-end">
          {props.isAuth ?
            <React.Fragment><Link className="navbar-item" to="/comments">
              <span className="icon">
                <i className="fas fa-comment" style={{ color: "white" }} />
              </span>
            </Link>
            <Link className="navbar-item" to="/favorites">
              <span className="icon navbar-item">
                <i className="fas fa-star" style={{ color: "yellow" }} />
              </span>
            </Link></React.Fragment> : ""}

          <div className="navbar-item">
            <div className="buttons">
              <Link onClick={props.isAuth ? props.logout : props.showLogin} className="button is-info" to="">
                <strong>{props.isAuth ? ("Logout (" + props.username + ")") : "Log in"}</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;