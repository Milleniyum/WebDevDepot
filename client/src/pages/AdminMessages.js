import React, { Component } from "react";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";

class AdminMessages extends Component {
  state = {
    headers: ["User", "Date", "Subject", "Path/URL", "Message", "Contact" ],
    messages: [],
    selectedMessage: ""
  };

  componentDidMount() {
    //setting the tab here instead of the tab component allows
    //the tab to stay active if screen is refreshed
    this.props.setTab("messages");
    this.getMessages();
  }

  getMessages = () => {
    API.getMessages().then(res => {
      console.log(res.data);
      this.setState({ messages: res.data});
    });
  };

  render() {
    return (
      <Wrapper marginTop="1px" padding="10px" heightOffset="94px">
        <Container>
              <table
                className="table is-hoverable is-striped"
                style={{ borderRadius: "6px", width: "100%" }}
              >
                <thead>
                  <tr>
                    {this.state.headers.map(header => (
                      <th key={header}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {this.state.messages.map(message => (
                    <tr
                      key={message._id}
                      style={{cursor: "pointer"}}
                      className={this.state.selectedMessage === message._id ? "is-selected" : ""}
                      onClick={() =>
                        this.setState({
                          selectedMessage: message._id
                        })
                      }
                    >
                      <td>
                        {message.user.username
                          ? message.user.username
                          : "Unknown"}
                      </td>
                      <td>{message.created}</td>
                      <td>{message.subject}</td>
                      <td>
                        {message.subject === "Suggest Site" ? <a
                          href={message.path}
                          title={message.path}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Web Address
                        </a> : message.path}
                      </td>
                      <td>{message.content}</td>
                      <td>{message.contact ?
                        <a href={message.user.email}>
                          <span>
                          <i
                            className="fas fa-envelope"
                            style={{ color: "blue", cursor: "pointer" }}
                          />
                          </span>
                        </a> : ""}
                        </td>
                      <td>
                        <span onClick={() => this.deleteMessage(message._id)}>
                          <i
                            className="fas fa-backspace"
                            style={{ color: "red", cursor: "pointer" }}
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        </Container>
      </Wrapper>
    );
  }
}

export default AdminMessages;
