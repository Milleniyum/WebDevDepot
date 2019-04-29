import React from "react";
// import UL from "../UL";
import "./style.css";

export default function Menu(props) {
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
          {props.menuItems.map(menuItem => (
            <div key={menuItem.id}>
              <p className="menu-label" data-id={menuItem.id}>
              <a onClick={(event) => props.getResources(event, menuItem.id)} href="/">{menuItem.title}</a>
              </p>
              {menuItem.items ? <UL level={1} getResources={props.getResources} menuItems={menuItem.items} /> : ""}
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

function UL(props) {
  return (
    <ul className="menu-list">
      {props.menuItems.map(menuItem => (
        <LI
          key={menuItem.id}
          id={menuItem.id}
          level={props.level}
          menuItem={menuItem}
          getResources={props.getResources}
        />
      ))}
    </ul>
  );
}

function LI(props) {
  return (
    <li className={props.level === 1 || (props.level === 2 && props.menuItem.items) ? "menu-parent": "menu-child"}>
      <a onClick={(event) => props.getResources(event, props.menuItem.id)} href="/">{props.menuItem.title}</a>
      {props.menuItem.items ? <UL level={2} getResources={props.getResources} menuItems={props.menuItem.items} /> : ""}
    </li>
  );
}
