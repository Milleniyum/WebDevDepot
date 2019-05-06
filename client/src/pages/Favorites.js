import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Hero from "../components/Hero";

class Favorites extends Component {
  state = {title: "Favorites"};

  render() {
    return (
      <div>
        <Wrapper marginTop="55px" heightOffset="65px">
        <Hero
            align="center"
            theme="is-dark"
            title={this.state.title}
            titlesize="2rem"
          />
        </Wrapper>
      </div>
    );
  }
}

export default Favorites;
