import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Resource from "../components/Resource";

class Favorites extends Component {
  state = {};

  render() {
    return (
      <div>
        <Wrapper>
          <Resource favorite={true}/>
          <Resource favorite={true}/>
          <Resource favorite={true}/>
        </Wrapper>
      </div>
    );
  }
}

export default Favorites;
