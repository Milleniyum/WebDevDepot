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
