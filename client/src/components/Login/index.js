import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import Modal from "../Modal";
import "./style.css";
import API from "../../utils/API";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.getElementById("login-username").focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === "Escape") this.cancel(event);
  };

  resetForm = () => {
    this.setState({
      username: "",
      password: "",
      error: ""
    });
  };

  login = event => {
    event.preventDefault();
    API.login({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        if (res.data.message) {
          this.setState({
            error: res.data.message
          });
        } else {
          this.resetForm();
          this.props.isAuthorized();
          this.props.closeLogin();
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: "A server error has occured." });
      });

    this.setState({ password: "" });
  };

  cancel = (event, form) => {
    event.preventDefault();
    this.resetForm();
    this.props.closeLogin(form);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Modal title="Login" closeForm={this.cancel}>
        <form
          className="login-form"
        >
          <Input
            id="login-username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            label="Username"
            controls="has-icons-left"
            placeholder="Username"
            lefticon="fas fa-user"
          />

          <Input
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            label="Password"
            type="password"
            placeholder="Password"
          />

          {this.state.error ? (
            <p className="help error-text is-danger">{this.state.error}</p>
          ) : (
            ""
          )}

          <div className="field is-grouped">
            <FormBtn
              button="is-link"
              disabled={!(this.state.username && this.state.password)}
              buttontext="Login"
              onClick={this.login}
            />
            <FormBtn
              button="is-text"
              buttontext="Cancel"
              onClick={this.cancel}
            />
          </div>

          <FormBtn
            button="is-text"
            buttontext="Not registered? Click here."
            onClick={event => this.cancel(event, "register")}
          />
        </form>
      </Modal>
    );
  }
}

export default Login;
