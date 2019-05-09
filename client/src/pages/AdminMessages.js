import React, { Component } from "react";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import dateFormat from "dateformat";
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
      this.setState({ messages: res.data});
    }).catch(err => console.log(err));
  };

  archiveMessage = id => {
    API.archiveMessage(id).then(res => {
      this.getMessages();
    }).catch(err => console.log(err));
  };

  deleteMessage = id => {
    API.deleteMessage(id).then(res => {
      this.getMessages();
    }).catch(err => console.log(err));
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
                      <td>{dateFormat(Date(message.created), "mmmm dS, yyyy")}</td>
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
                      <td style={{paddingLeft: "38px"}}>{message.contact ?
                        <a href={"mailto:" + message.user.email}>
                          <span>
                            <i
                              title="reply"
                            className="far fa-envelope"
                            style={{cursor: "pointer" }}
                          />
                          </span>
                        </a> : ""}
                      </td>
                      <td>
                        <span onClick={() => this.archiveMessage(message._id)}>
                          <i
                            title="archive"
                            className="fas fa-archive"
                            style={{ color: "blue", cursor: "pointer" }}
                          />
                        </span>
                      </td>
                      <td>
                        <span onClick={() => this.deleteMessage(message._id)}>
                          <i
                            title={"delete"}
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
