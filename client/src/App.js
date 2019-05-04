import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import Comments from "./pages/Comments";
import AdminMenu from "./pages/AdminMenu";
import AdminResources from "./pages/AdminResources";
import AdminSuggestions from "./pages/AdminSuggestions";

import "./App.css";

class App extends Component {
  state = {
    isAuth: false,
    isAdmin: false,
    activeTab: ""
  };

  setTab = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    return (
      <Router>
        <Navbar setTab={this.setTab} />
        <Route
          exact
          path="/"
          render={props => <Main />}
        />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/comments" component={Comments} />
        <Route
          path="/admin"
          render={props => (
            <Tabs active={this.state.activeTab} />
          )}
        />
        <Route exact path="/admin/menu" render={props => (
            <AdminMenu setTab={this.setTab} />
          )} />
        <Route exact path="/admin/resources" render={props => (
            <AdminResources setTab={this.setTab} />
          )} />
        <Route exact path="/admin/suggestions" render={props => (
            <AdminSuggestions setTab={this.setTab} />
          )} />
      </Router>
    );
  }
}

export default App;
