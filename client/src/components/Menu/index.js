import React, { Component } from "react";
// import UL from "../UL";
import "./style.css";

export default class Menu extends Component {
  toggleMenu(event, id, menuInfo) {
    event.preventDefault();
    const toggle = document.getElementById("toggle-" + id);
    const menuList = document.getElementById("menu-list-" + id);
    if (toggle) {
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

    this.clickMenu(event, id, menuInfo);
  }

  clickMenu = (event, id, menuInfo) => {
    event.preventDefault();
    const els = document.getElementsByClassName("menu-item");
    for (let i = 0; i < els.length; i++) {
      els[i].classList.remove("is-active");
    }

    //use id instead of event.target.classList so that the section title will be active if it was the toggle the user clicked
    document.getElementById("menu-item-" + id).classList.add("is-active");

    this.props.getResources(id);
    this.props.populateHero(menuInfo);
  };

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
              <div key={menuItem._id}>
                <p className="menu-label">
                  <a
                    className={"menu-item"}
                    id={"menu-item-" + menuItem._id}
                    onClick={event =>
                      this.toggleMenu(event, menuItem._id, {
                        title: menuItem.title,
                        description: menuItem.description,
                        source: menuItem.source
                      })
                    }
                    href="/"
                  >
                    {menuItem.title}
                  </a>
                  {menuItem.items ? (
                    <span
                      onClick={event =>
                        this.toggleMenu(event, menuItem._id, {
                          title: menuItem.title,
                          description: menuItem.description,
                          source: menuItem.source
                        })
                      }
                      className="icon"
                    >
                      <i
                        className="fa fa-chevron-up"
                        id={"toggle-" + menuItem._id}
                      />
                    </span>
                  ) : (
                    ""
                  )}
                </p>
                {menuItem.items ? (
                  <UL
                    toggleId={menuItem._id}
                    level={1}
                    clickMenu={this.clickMenu}
                    menuItems={menuItem.items}
                    path={menuItem.title}
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
          key={menuItem._id}
          id={menuItem._id}
          level={props.level}
          menuItem={menuItem}
          clickMenu={props.clickMenu}
          path={props.path}
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
      <a
        className="menu-item"
        id={"menu-item-" + props.menuItem._id}
        onClick={event =>
          props.clickMenu(event, props.menuItem._id, {
            title: props.path + " > " + props.menuItem.title,
            description: props.menuItem.description,
            source: props.menuItem.source
          })
        }
        href="/"
      >
        {props.menuItem.title}
      </a>
      {props.menuItem.items ? (
        <UL
          level={2}
          clickMenu={props.clickMenu}
          menuItems={props.menuItem.items}
          path={props.path + " > " + props.menuItem.title}
        />
      ) : (
        ""
      )}
    </li>
  );
}
