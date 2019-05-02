import React, { Component } from "react";
import Container from "../components/Container";

class AdminResources extends Component {
  state = {};

  componentDidMount() {
    //setting the tab here instead of the tab component allows 
    //the tab to stay active if screen is refreshed
    this.props.setTab("resources");
  }

  render() {
    return <Container />;
  }
}

export default AdminResources;
