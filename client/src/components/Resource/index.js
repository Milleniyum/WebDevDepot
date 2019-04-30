import React, { Component } from "react";
import { a } from "react-router-dom";
import "./style.css";

class Resource extends Component {
  state = {
    clicked: false,
    favorite: false,
    liked: false
  };

  componentDidMount() {
    this.setState({
      clicked: this.props.clicked,
      favorite: this.props.favorite,
      liked: this.props.liked
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <p>
            <a href={this.props.url} target="_blank" rel="noopener noreferrer">
              {this.props.title}
            </a>
          </p>
        </div>
        <footer className="card-footer">
          <a href="/" className="card-footer-item">
            <span className="icon">
              <i
                className={
                  this.state.clicked ? "fas fa-check clicked" : "fas fa-check"
                }
              />
            </span>
          </a>
          <a href="/" className="card-footer-item">
            <span className="icon">
              <i
                className={
                  this.state.favorite ? "fas fa-star favorited" : "far fa-star"
                }
              />
            </span>
          </a>
          <a href="/" className="card-footer-item">
            <span className="icon">
              <i
                className={
                  this.state.liked
                    ? "fas fa-thumbs-up liked"
                    : "far fa-thumbs-up"
                }
              />
            </span>
          </a>
        </footer>
      </div>
    );
  }
}

export default Resource;
