import React, { Component } from "react";
import Matrix from "../components/Matrix";

class NotFound extends Component {
  state = {
    messages: [
      {
        type: "normal",
        message: "These are not the droids you're looking for..."
      },
      { type: "normal", message: "Shame <ding> Shame <ding> Shame <ding>" },
      { type: "normal", message: "Peek-a-boo I see you!" },
      {
        type: "normal",
        message:
          "You sit before Web Dev Depot, first of it's name, breaker of code and mother of web developers!"
      },
      {
        type: "normal",
        message: "Well this is awkward."
      },
      { type: "special", message: "Matrix" }
    ],
    selected: ""
  };

  componentDidMount() {
    const selected = Math.floor(Math.random() * this.state.messages.length);
    this.setState({ selected: this.state.messages[selected] });
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            fontSize: "30px",
            color: "white",
            padding: "20px",
            textAlign: "center"
          }}
        >
          {this.state.selected.type === "normal" ? (
            <p>{this.state.selected.message}</p>
          ) : (
            ""
          )}
          {this.state.selected.type === "special" &&
          this.state.selected.message === "Matrix" ? (
            <React.Fragment>
              <Matrix />
              <p style={{ zIndex: 100 }}>THE MATRIX HAS YOU</p>
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default NotFound;
