import React, { Component } from "react";
import Menu from "../components/Menu";
import Wrapper from "../components/Wrapper";
import Resource from "../components/Resource";

class Main extends Component {
  state = {};

  render() {
    return (
      <div>
        <Menu />
        <Wrapper marginLeft="205px">
          <Resource />
          <Resource />
          <Resource />
          <Resource />
          <Resource />
          <Resource />
          <Resource />
          <Resource />
          <Resource />
        </Wrapper>
      </div>
    );
  }
}

export default Main;
