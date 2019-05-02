import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import API from "../utils/API";

class AdminSuggestions extends Component {
  state = {};

  componentDidMount() {
    //setting the tab here instead of the tab component allows 
    //the tab to stay active if screen is refreshed
    this.props.setTab("suggestions");
  }

  render() {
    return <Container />;
  }
}

export default AdminSuggestions;
