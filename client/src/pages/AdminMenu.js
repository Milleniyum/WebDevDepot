import React, { Component } from "react";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import { Input, DropDown, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

class AdminMenu extends Component {
  state = {
    level: 0,
    position: "",
    title: "",
    description: "",
    source: "",
    options: [0, 1, 2, 3],
    buttonText: "Add"
  };

  componentDidMount() {
    //setting the tab here instead of the tab component allows
    //the tab to stay active if screen is refreshed
    this.props.setTab("menu");
  }

  saveMenu = event => {
    event.preventDefault();
    API.saveMenu({
      position: this.state.level,
      level: this.state.level,
      title: this.state.level,
      description: this.state.level,
      source: this.state.level
    }).then((res) => {
      console.log(res);
    });

    this.setState({
      level: 0,
      position: "",
      title: "",
      description: "",
      source: "",
      buttonText: "Add"
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Wrapper marginTop="1px" padding="10px" heightOffset="94px">
        <Container className="container">
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
                      <Input
                        value={this.state.position}
                        onChange={this.handleInputChange}
                        name="position"
                        placeholder="Pos Num"
                      />
                    </div>
                  </div>

                  <div className="column">
                    <div className="field">
                      <label className="label">Level</label>
                      <DropDown
                        value={this.state.level}
                        onChange={this.handleInputChange}
                        name="level"
                        options={this.state.options}
                      />
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Title</label>
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Menu Title"
                  />
                </div>

                <div className="field">
                  <label className="label">Description</label>
                  <TextArea
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description"
                    placeholder="Menu Description"
                  />
                </div>

                <div className="field">
                  <label className="label">Source</label>
                  <Input
                    value={this.state.source}
                    onChange={this.handleInputChange}
                    name="source"
                    placeholder="Description Source"
                  />
                </div>

                <div className="field">
                  <FormBtn
                    disabled={!(this.state.position && this.state.title)}
                    onClick={this.saveMenu}
                  >
                    {this.state.buttonText}
                  </FormBtn>
                </div>
              </form>
            </div>
            <div className="column is-9">
              <table
                className="table is-hoverable is-striped"
                style={{ borderRadius: "6px" }}
              >
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
                    <td>Web Development</td>
                    <td>
                      Web development is the work involved in developing a web
                      site for the Internet (World Wide Web) or an intranet (a
                      private network).
                    </td>
                    <td>
                      <a
                        href="https://en.wikipedia.org/wiki/Web_development"
                        title="https://en.wikipedia.org/wiki/Web_development"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Description Source
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Wrapper>
    );
  }
}

export default AdminMenu;
