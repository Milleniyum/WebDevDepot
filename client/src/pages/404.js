import React, { Component } from "react";

class NotFound extends Component {
  state = {
    messages: [
      "These are not the droids you're looking for...",
      "Shame <ding> Shame <ding> Shame <ding>",
      "Peek-a-boo I see you!"
    ],
    selected: ""
  };

  componentDidMount() {
    const selected = Math.floor(Math.random() * this.state.messages.length);
    this.setState({ selected: this.state.messages[selected] });
  }

  render() {
    return (
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: -1}}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", fontSize: "30px", color: "white", padding: "20px", textAlign: "center" }}>
          <p>{this.state.selected}</p>
        </div>
        </div>
    );
  }
}

export default NotFound;
