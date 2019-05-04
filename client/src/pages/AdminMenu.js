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
    options: [{ id: 0, title: 0 }, { id: 1, title: 1 }, { id: 2, title: 2 }, { id: 3, title: 3 }],
    buttonText: "Add",
    headers: ["Pos", "Level", "Title", "Description", "Source"],
    menuItems: [],
    updateId: "",
    updatePos: ""
  };

  componentDidMount() {
    //setting the tab here instead of the tab component allows
    //the tab to stay active if screen is refreshed
    this.props.setTab("menu");
    this.getMenuItems();
  }

  resetForm = () => {
    this.setState({
      level: 0,
      position: "",
      title: "",
      description: "",
      source: "",
      buttonText: "Add"
    });
  };

  getMenuItems = () => {
    API.getMenuItems().then(res => {
      this.setState({ menuItems: res.data });
    });
  };

  addMenuItem = event => {
    event.preventDefault();
    API.addMenuItem({
      position: isNaN(this.state.position) || parseInt(this.state.position) === 0 ? 1 : this.state.position,
      level: this.state.level,
      title: this.state.title,
      description: this.state.description,
      source: this.state.source
    }).then(res => {
      this.getMenuItems();
    });
    this.resetForm();
  };

  updateMenuItem = (event) => {
    event.preventDefault();
    const menuItem = {
      id: this.state.updateId,
      oldPosition: this.state.updatePos,
      data: {
        position: isNaN(this.state.position) || parseInt(this.state.position) === 0 ? 1 : this.state.position,
        level: this.state.level,
        title: this.state.title,
        description: this.state.description,
        source: this.state.source
      }
    };
    
    API.updateMenuItem(menuItem)
      .then(res => {
        this.getMenuItems();
      });
    this.resetForm();
  };

  deleteMenuItem = (menuItem) => {
    API.deleteMenuItem(menuItem)
      .then(res => {
        this.getMenuItems();
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
                    onClick={
                      this.state.buttonText === "Add"
                        ? this.addMenuItem
                        : this.updateMenuItem
                    }
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
                    {this.state.headers.map(header => (
                      <th key={header}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {this.state.menuItems.map(item => (
                    <tr
                      key={item._id}
                      onDoubleClick={() => this.setState({
                        updateId: item._id,
                        updatePos: item.position,
                        position: item.position,
                        level: item.level,
                        title: item.title,
                        description: item.description,
                        source: item.source,
                        buttonText: "Update"
                      })}
                    >
                      <td>{item.position}</td>
                      <td>{item.level}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>
                        {item.source ? (
                          <a
                            href={item.source}
                            title={item.source}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Description Source
                          </a>
                        ) : (
                          ""
                        )}
                      </td>
                      <td>
                        <span onClick={() => this.deleteMenuItem({id: item._id, position: item.position})}>
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
            </div>
          </div>
        </Container>
      </Wrapper>
    );
  }
}

export default AdminMenu;
