import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import Modal from "../Modal";
import "./style.css";
import API from "../../utils/API";

class Registration extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    validUN: false,
    validEM: false,
    validPW: false,
    validCF: false,
    error: "",
    // eslint-disable-next-line
    reg: RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  };

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown);
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === "Escape") this.cancel(event);
  };

  resetForm = () => {
    this.setState({
      username: "",
      email: "",
      password: "",
      confirm: "",
      validUN: false,
      validEM: false,
      validPW: false,
      validCF: false,
      error: ""
    });
  };

  validateField = (name, value) => {
    switch (name) {
      case "username":
        //API.validateUsername
        this.setState({ validUN: true });
        break;
      case "email":
        this.setState({ validEM: this.state.reg.test(value) });
        break;
      case "password":
        this.setState({
          validPW: value.length > 7,
          validCF: value.length > 7 && value === this.state.confirm
        });

        break;
      case "confirm":
        this.setState({
          validCF: this.state.validPW && this.state.password === value
        });
        break;
      default:
    }
  };

  register = event => {
    event.preventDefault();
    API.register({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        if (res.data.message) {
          this.setState({
            error: res.data.message
          });
        } else {
          console.log("registration successful");
          this.resetForm();
          //add code to close modal
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: "A server error has occured." });
      });

    this.setState({
      password: "",
      confirm: ""
    });
  };

  cancel = (event, form) => {
    event.preventDefault();
    this.resetForm();
    this.props.closeRegistration(form);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.validateField(name, value);
  };

  render() {
    return (
      <Modal title="Registration" closeForm={this.cancel}>
        <form
          className="register-form"
          style={{
            padding: "10px"
          }}
        >
          <Input
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            label="Username"
            controls="has-icons-left has-icons-right"
            inputs={this.state.validUN ? "is-success" : "is-danger"}
            placeholder="Username"
            lefticon="fas fa-user"
            righticon={
              this.state.validUN
                ? "fas fa-check"
                : "fas fa-exclamation-triangle"
            }
            help={this.state.validUN ? "is-success" : "is-danger"}
            helptext={
              this.state.validUN
                ? "Username is available"
                : "Username is not available"
            }
          />

          <Input
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            label="Email"
            controls="has-icons-left has-icons-right"
            inputs={this.state.validEM ? "is-success" : "is-danger"}
            type="email"
            placeholder="Email"
            lefticon="fas fa-envelope"
            righticon={
              this.state.validEM
                ? "fas fa-check"
                : "fas fa-exclamation-triangle"
            }
            help={this.state.validEM ? "is-success" : "is-danger"}
            helptext={
              this.state.validEM ? "Email is valid" : "Email is invalid"
            }
          />

          <Input
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            label="Password"
            controls="has-icons-right"
            inputs={this.state.validPW ? "is-success" : "is-danger"}
            type="password"
            placeholder="at least 8 characters"
            righticon={
              this.state.validPW
                ? "fas fa-check"
                : "fas fa-exclamation-triangle"
            }
            help={this.state.validPW ? "is-success" : "is-danger"}
            helptext={
              this.state.validPW
                ? "Password is valid"
                : "Password must be at least 8 characters"
            }
          />

          <Input
            name="confirm"
            value={this.state.confirm}
            onChange={this.handleInputChange}
            label="Confirm Password"
            controls="has-icons-right"
            inputs={this.state.validCF ? "is-success" : "is-danger"}
            type="password"
            righticon={
              this.state.validCF
                ? "fas fa-check"
                : "fas fa-exclamation-triangle"
            }
            help={this.state.validCF ? "is-success" : "is-danger"}
            helptext={
              this.state.validCF ? "Passwords match" : "Passwords don't match"
            }
            placeholder="Re-enter Password"
          />

          {this.state.error ? (
            <p className="help error-text is-danger">{this.state.error}</p>
          ) : (
            ""
          )}

          <div className="field is-grouped">
            <FormBtn
              button="is-link"
              disabled={
                !(
                  this.state.validUN &&
                  this.state.validEM &&
                  this.state.validCF
                )
              }
              buttontext="Submit"
              onClick={this.register}
            />
            <FormBtn
              button="is-text"
              buttontext="Cancel"
              onClick={this.cancel}
            />
          </div>

          <FormBtn
            button="is-text"
            buttontext="Already registered? Log in here."
            onClick={event => this.cancel(event, "login")}
          />
        </form>
      </Modal>
    );
  }
}

export default Registration;