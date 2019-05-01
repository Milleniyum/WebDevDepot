import React, { Component } from "react";
import Menu from "../components/Menu";
import Wrapper from "../components/Wrapper";
import Resource from "../components/Resource";

class Main extends Component {
  state = {
    menuItems: [],
    resources: []
  };

  componentDidMount() {
    this.getMenuItems();
  }

  getMenuItems = () => {
    // will get from mongodb
    const menuItems = [
      {
        title: "Web Dev",
        id: 1,
        items: [{ title: "Learning Paths", id: 12 }]
      },
      {
        title: "Front End",
        id: 2,
        items: [
          { title: "HTML", id: 3 },
          { title: "CSS", id: 4 },
          {
            title: "Package Managers",
            id: 5,
            items: [{ title: "npm", id: 6 }, { title: "yarn", id: 7 }]
          },
          {
            title: "Build Tools",
            id: 8,
            items: [
              {
                title: "Linters and Formatters",
                id: 9,
                items: [
                  { title: "Prettier", id: 10 },
                  { title: "ESLint", id: 11 }
                ]
              }
            ]
          }
        ]
      }
    ];
    this.setState({ menuItems: menuItems });
  };

  getResources = id => {
    const resources = [
      {
        id: 1,
        title: "Wikipedia - Cascading Style Sheets",
        url: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
        clicked: true,
        favorite: true,
        liked: true
      },
      {
        id: 2,
        title: "CSS Tricks",
        url: "https://www.css-tricks.com",
        clicked: false,
        favorite: false,
        liked: false
      }
    ];

    this.setState({ resources: resources });
  };

  render() {
    return (
      <div>
        <Menu
          getResources={this.getResources}
          menuItems={this.state.menuItems}
        />
        <Wrapper marginTop="55px" marginLeft="205px" heightOffset="65px">
          {this.state.resources.map(resource => (
            <Resource
              key={resource.id}
              id={resource.id}
              title={resource.title}
              url={resource.url}
              clicked={resource.clicked}
              favorite={resource.favorite}
              liked={resource.liked}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Main;
