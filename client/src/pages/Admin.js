import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";

class Admin extends Component {
  state = {
    menuLevel: 0
  };

  saveMenuItem = () => {};

  render() {
    return (
      <div>
        <Wrapper padding="5px">
          <div
            className="tabs is-centered"
            style={{ borderRadius: "6px"}}
          >
            <ul>
              <li className="is-active">
                <a style={{ color: "white", fontWeight: "bold"}}>Menu</a>
              </li>
              <li>
                <a style={{ color: "white", fontWeight: "bold"}}>Resources</a>
              </li>
              <li>
                <a style={{ color: "white", fontWeight: "bold"}}>Suggestions</a>
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <form
                  className="menu-form"
                  style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "6px"
                  }}
                >
                  <div className="columns">
                    <div className="column">
                  <div className="field">
                    <label className="label">Position</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Pos Num"
                      />
                    </div>
                      </div>
                      </div>

                    <div className="column">
                  <div className="field">
                    <label className="label">Level</label>
                    <div className="control">
                      <div className="select">
                        <select>
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                    </div>
                    </div>

                  <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Menu Title"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder="Menu Description"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Source</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Description Source"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <button className="button is-link">Add</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="column is-9">
                <table className="table is-hoverable is-striped" style={{borderRadius: "6px"}}>
                  <thead>
                    <tr>
                      <th>Pos</th>
                      <th>Level</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>0</td>
                      <td>Web Dev</td>
                      <td>Web development is the work involved in developing a web site for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web-based internet applications (web apps), electronic businesses, and social network services. A more comprehensive list of tasks to which web development commonly refers, may include web engineering, web design, web content development, client liaison, client-side/server-side scripting, web server and network security configuration, and e-commerce development.</td>
                      <td><a href="https://en.wikipedia.org/wiki/Web_development" title="https://en.wikipedia.org/wiki/Web_development" target="_blank" rel="noopener noreferrer">Description Source</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Admin;
