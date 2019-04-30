import React, { Component } from "react";
// import UL from "../UL";
import "./style.css";

export default class Menu extends Component {
  toggleMenu(id) {
    const toggle = document.getElementById("toggle-" + id);
    const menuList = document.getElementById("menu-list-" + id);
    if (toggle.classList.contains("fa-chevron-up")) {
      toggle.classList.remove("fa-chevron-up");
      toggle.classList.add("fa-chevron-down");
      if (menuList) menuList.classList.remove("is-hidden");
    } else {
      toggle.classList.remove("fa-chevron-down");
      toggle.classList.add("fa-chevron-up");
      if (menuList) menuList.classList.add("is-hidden");
    }
  }

  clickMenu = (event, id) => {
    event.preventDefault();
    const els = document.getElementsByClassName("menu-item");
    for (let i = 0; i < els.length; i++) {
      els[i].classList.remove("is-active");
    };
    event.target.classList.add("is-active");

    this.props.getResources(id);
  }

  render() {
    return (
      <div className="sidebar">
        <div className="field search-box">
          <p className="control has-icons-right">
            <input className="input" type="text" placeholder="Search" />
            <span className="icon is-small is-right">
              <i className="fas fa-search" />
            </span>
          </p>
        </div>
        <div className="menu-container">
          <aside className="menu">
            {this.props.menuItems.map(menuItem => (
              <div key={menuItem.id}>
                <p className="menu-label">
                  <a
                    className=" menu-item"
                    onClick={event =>
                      this.clickMenu(event, menuItem.id)
                    }
                    href="/"
                  >
                    {menuItem.title}
                  </a>
                  {(menuItem.items ? (
                    <span
                      onClick={event => this.toggleMenu(menuItem.id)}
                      className="icon"
                    >
                      <i
                        className="fa fa-chevron-up"
                        id={"toggle-" + menuItem.id}
                      />
                    </span>
                  ) : "")}
                </p>
                {menuItem.items ? (
                  <UL
                    toggleId={menuItem.id}
                    level={1}
                    clickMenu={this.clickMenu}
                    menuItems={menuItem.items}
                  />
                ) : (
                  ""
                )}
              </div>
            ))}
            {/* <p className="menu-label">Front End</p>
          <ul className="menu-list">
            <li>
              <Link className="menu-parent" to="">
                HTML
              </Link>
            </li>
            <li>
              <Link className="menu-parent" to="">
                CSS
              </Link>
            </li>
            <li>
              <Link className="menu-parent" to="">
                Package Managers
              </Link>
              <ul>
                <li className="menu-child">npm</li>
                <li>
                  <Link className="menu-child" to="">
                    yarn
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="menu-parent" to="">
                CSS Pre-processors
              </Link>
              <ul>
                <li>
                  <Link className="menu-child" to="">
                    SASS
                  </Link>
                </li>
                <li>
                  <Link className="menu-child" to="">
                    PostCSS
                  </Link>
                </li>
              </ul>
              <Link className="menu-parent" to="">
                CSS Frameworks
              </Link>
              <ul>
                <li>
                  <Link className="menu-child" to="">
                    Bootstrap
                  </Link>
                </li>
                <li>
                  <Link className="menu-child" to="">
                    Bulma
                  </Link>
                </li>
                <li>
                  <Link className="menu-child" to="">
                    Materialize
                  </Link>
                </li>
                <li>
                  <Link className="menu-child" to="">
                    Semantic UI
                  </Link>
                </li>
              </ul>
              <Link className="menu-parent" to="">
                Build Tools
              </Link>
              <ul>
                <li>
                  <Link className="menu-coparent" to="">
                    Linters and Formatters
                  </Link>
                  <ul>
                    <li>
                      <Link className="menu-child" to="">
                        Prettier
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-child" to="">
                        ESLint
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="menu-coparent" to="">
                    Task Runners
                  </Link>
                  <ul>
                    <li>
                      <Link className="menu-child" to="">
                        npm scripts
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="menu-coparent" to="">
                    Module Bundlers
                  </Link>
                  <ul>
                    <li>
                      <Link className="menu-child" to="">
                        Webpack
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <p className="menu-label">Back-End</p> */}
          </aside>
        </div>
      </div>
    );
  }
}

function UL(props) {
  return (
    <ul
      className={"menu-list " + (props.level === 1 ? "is-hidden" : "")}
      id={"menu-list-" + props.toggleId}
    >
      {props.menuItems.map(menuItem => (
        <LI
          key={menuItem.id}
          id={menuItem.id}
          level={props.level}
          menuItem={menuItem}
          clickMenu={props.clickMenu}
        />
      ))}
    </ul>
  );
}

function LI(props) {
  return (
    <li
      className={
        props.level === 1 || (props.level === 2 && props.menuItem.items)
          ? "menu-parent"
          : "menu-child"
      }
    >
      <a className="menu-item"
        onClick={event => props.clickMenu(event, props.menuItem.id)}
        href="/"
      >
        {props.menuItem.title}
      </a>
      {props.menuItem.items ? (
        <UL
          level={2}
          clickMenu={props.clickMenu}
          menuItems={props.menuItem.items}
        />
      ) : (
        ""
      )}
    </li>
  );
}
