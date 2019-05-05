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
import Registration from "./components/Registration";
import Login from "./components/Login";
import API from "./utils/API";

import "./App.css";

class App extends Component {
  state = {
    isAuth: false,
    isAdmin: false,
    activeTab: "",
    showReg: false,
    showLogin: false,
    username: "",
    likes: [],
    favorites: [],
    clicks: []
  };

  componentDidMount() {
    this.isAuthorized();
  }

  resetState = () => {
    this.setState({
      isAuth: false,
      isAdmin: false,
      activeTab: "",
      showReg: false,
      showLogin: false,
      username: "",
      likes: [],
      favorites: [],
      clicks: []
    });
  };

  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        if (res.data.message) {
          this.resetState();
        } else {
          this.setState({
            isAuth: true,
            isAdmin: res.data.level === 2,
            username: res.data.username,
            likes: res.data.likes,
            favorites: res.data.favorites,
            clicks: res.data.clicks
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.resetState();
      });
  };

  setTab = tab => {
    this.setState({ activeTab: tab });
  };

  showLogin = () => {
    this.setState({ showLogin: true });
  };

  logout = () => {
    API.logout().then(res => {
      console.log(res);
      this.resetState();
    }).catch(err => { 
      console.log();
    })
  };

  closeRegistration = form => {
    this.setState({
      showReg: false,
      showLogin: form ? true : false
    });
  };

  closeLogin = form => {
    this.setState({
      showReg: form ? true : false,
      showLogin: false
    });
  };

  render() {
    return (
      <Router onKeyUp={this.handleKeyUp}>
        <Navbar
          isAuth={this.state.isAuth}
          isAdmin={this.state.isAdmin}
          username={this.state.username}
          setTab={this.setTab}
          showLogin={this.showLogin}
          logout={this.logout}
        />
        <Route exact path="/" render={props => <Main />} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/comments" component={Comments} />
        <Route
          path="/admin"
          render={props => <Tabs active={this.state.activeTab} />}
        />
        <Route
          exact
          path="/admin/menu"
          render={props => <AdminMenu setTab={this.setTab} />}
        />
        <Route
          exact
          path="/admin/resources"
          render={props => <AdminResources setTab={this.setTab} />}
        />
        <Route
          exact
          path="/admin/suggestions"
          render={props => <AdminSuggestions setTab={this.setTab} />}
        />

        {this.state.showReg ? (
          <Registration
            isAuthorized={this.isAuthorized}
            closeRegistration={this.closeRegistration}
          />
        ) : (
          ""
        )}
        {this.state.showLogin ? (
          <Login
            isAuthorized={this.isAuthorized}
            closeLogin={this.closeLogin}
          />
        ) : (
          ""
        )}
      </Router>
    );
  }
}

export default App;
