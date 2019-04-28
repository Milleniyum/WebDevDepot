import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import Comments from "./pages/Comments";
import Admin from "./pages/Admin";

import "./App.css";

class App extends Component {
  state = {
    isAuth: false,
    isAdmin: false
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" render={(props) => <Main {...props} isAuthed={this.state.isAuth} />} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/admin" component={Admin} />
      </Router>
    );
  }
}

export default App;