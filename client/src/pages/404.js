import React, { Component } from "react";
import Matrix from "../components/Matrix";

class NotFound extends Component {
  state = {
    messages: [
      {
        type: "normal",
        message: "These are not the droids you're looking for..."
      },
      { type: "special", message: "Shame" },
      { type: "normal", message: "Peek-a-boo I see you!" },
      {
        type: "normal",
        message:
          "You sit before Web Dev Depot, cyber-born, first of it's name, breaker of code and maker of web developers!"
      },
      {
        type: "normal",
        message: "Well this is awkward."
      },
      {type: "special", message: "Pill"}
    ],
    selected: ""
  };

  componentDidMount() {
    const selected = Math.floor(Math.random() * this.state.messages.length);
    this.setState({ selected: this.state.messages[selected] });
  }

  bluePill = () => {
    this.setState({ selected: { type: "special", message: "Matrix" } });
  }

  redPill = () => {
    window.location.href = window.location.origin;
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
          this.state.selected.message === "Pill" ? (
            <React.Fragment>
              <p>Will it be the <div onClick={this.bluePill} style={{display:"inline", borderRadius: "16px", color: "white", backgroundColor: "blue", cursor: "pointer", padding: "4px"}}>blue pill</div> or the  <div onClick={this.redPill} style={{display:"inline", borderRadius: "16px", color: "white", backgroundColor: "red", cursor: "pointer", padding: "4px"}}>red pill</div> ?</p>
            </React.Fragment>
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
          {this.state.selected.type === "special" &&
          this.state.selected.message === "Shame" ? (
            <p>
              <i class="fas fa-bell" style={{color: "gold"}}/>
              <br />
              Shame
              <br />
              <i class="fas fa-bell" style={{color: "gold"}}/>
              <br />
              Shame
              <br />
              <i class="fas fa-bell" style={{color: "gold"}}/>
              <br />
              Shame
              <br />
              <i class="fas fa-bell" style={{color: "gold"}} />
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default NotFound;
