import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";

class Admin extends Component {
  state = {};

  render() {
    return (
      <div>
        <Wrapper>
          <div
            className="menu-entry"
            style={{
              width: "406px",
              backgroundColor: "white",
              padding: "20px"
            }}
          >
            
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

            <div className="field">
              <label className="label">Order</label>
              <div className="control">
                <input className="input" type="text" placeholder="Order Number" />
              </div>
            </div>
            
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input className="input" type="text" placeholder="Menu Title" />
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea className="textarea" placeholder="Menu Description" />
              </div>
            </div>

            <div className="field">
              <label className="label">Source</label>
              <div className="control">
                <input className="input" type="text" placeholder="Description Source" />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Admin;
