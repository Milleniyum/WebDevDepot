import React from "react";
import "./style.css";

function Menu(props) {
  return (
    <div>
      <nav
        class="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="/images/brand_logo.png" alt="logo" />
          </a>
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div class="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Admin</a>
          </div>

          <div className="navbar-end">
            <a class="navbar-item">
              <span class="icon">
                <i class="fas fa-comment" style={{color: "white"}} />
              </span>
            </a>
            <a class="navbar-item">
              <span class="icon">
                <i class="fas fa-star" style={{color: "yellow"}} />
              </span>
            </a>

            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="sidebar">
        <div class="field search-box">
          <p class="control has-icons-right">
            <input className="input" type="text" placeholder="Search" />
            <span className="icon is-small is-right">
              <i className="fas fa-search" />
            </span>
          </p>
        </div>
        <div className="menu-container">
          <aside className="menu">
            <p className="menu-label">
              <a>Front End</a>
            </p>
            <ul className="menu-list">
              <li>
                <a className="menu-parent">HTML</a>
              </li>
              <li>
                <a className="menu-parent">CSS</a>
              </li>
              <li>
                <a className="menu-parent">Package Managers</a>
                <ul>
                  <li>
                    <a className="menu-child">npm</a>
                  </li>
                  <li>
                    <a className="menu-child">yarn</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="menu-parent">CSS Pre-processors</a>
                <ul>
                  <li>
                    <a className="menu-child">SASS</a>
                  </li>
                  <li>
                    <a className="menu-child">PostCSS</a>
                  </li>
                </ul>
                <a className="menu-parent">CSS Frameworks</a>
                <ul>
                  <li>
                    <a className="menu-child">Bootstrap</a>
                  </li>
                  <li>
                    <a className="menu-child">Bulma</a>
                  </li>
                  <li>
                    <a className="menu-child">Materialize</a>
                  </li>
                  <li>
                    <a className="menu-child">Semantic UI</a>
                  </li>
                </ul>
                <a className="menu-parent">Build Tools</a>
                <ul>
                  <li>
                    <a className="menu-coparent">Linters and Formatters</a>
                    <ul>
                      <li>
                        <a className="menu-child">Prettier</a>
                      </li>
                      <li>
                        <a className="menu-child">ESLint</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="menu-coparent">Task Runners</a>
                    <ul>
                      <li>
                        <a className="menu-child">npm scripts</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="menu-coparent">Module Bundlers</a>
                    <ul>
                      <li>
                        <a className="menu-child">Webpack</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p className="menu-label">Back-End</p>
          </aside>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="card" style={{ width: "200px", height: "200px" }}>
          <div className="card-content">
            <p>
              <a
                href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia - Cascading Style Sheets
              </a>
            </p>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="fas fa-check" style={{ color: "green" }} />
              </span>
            </a>
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="fas fa-comment" style={{color: "white"}} />
              </span>
            </a>
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="far fa-star" />
              </span>
            </a>
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="fas fa-thumbs-up" style={{color: "lightblue"}} />
              </span>
            </a>
          </footer>
        </div>

        <div className="card" style={{ width: "200px", height: "200px" }}>
          <div className="card-content">
            <p>
              <a
                href="https://css-tricks.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS-Tricks
              </a>
            </p>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="fas fa-check" style={{ color: "green" }} />
              </span>
            </a>
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="fas fa-comment" style={{color: "white"}} />
              </span>
            </a>
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="far fa-star" />
              </span>
            </a>
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="far fa-thumbs-up" />
              </span>
            </a>
          </footer>
        </div>

        <div className="card" style={{ width: "200px", height: "200px" }}>
          <div className="card-content">
            <p>
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noopener noreferrer"
              >
                w3schools - CSS Tutorial
              </a>
            </p>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="fas fa-check" />
              </span>
            </a>
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="fas fa-comment" style={{color: "white"}} />
              </span>
            </a>
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="far fa-star" />
              </span>
            </a>
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="far fa-thumbs-up" />
              </span>
            </a>
          </footer>
        </div>

        <div className="card" style={{ width: "200px", height: "200px" }}>
          <div className="card-content">
            <p>
              <a
                href="https://www.codecademy.com/learn/learn-css"
                target="_blank"
                rel="noopener noreferrer"
              >
                codecademy - Learn CSS
              </a>
            </p>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              <span className="icon card-footer-item">
                <i className="fas fa-check" style={{ color: "green" }} />
              </span>
            </a>
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="fas fa-comment" style={{color: "white"}} />
              </span>
            </a>
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="fas fa-star" style={{ color: "yellow" }} />
              </span>
            </a>
            <a href="#" className="card-footer-item">
              <span className="icon">
                <i className="far fa-thumbs-up" />
              </span>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Menu;
