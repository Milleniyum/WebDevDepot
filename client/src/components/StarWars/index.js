import React, { Component } from "react";
import "./style.css";

class StarWars extends Component {
  componentDidMount() {
    this.props.setEffectSource("https://codepen.io/geoffgraham/pen/BpwqOE");
  }

  render() {
    return (
      <React.Fragment>
        <div className="fade" />

        <section className="star-wars">
          <div className="crawl">
            <div className="title">
              <p>Episode III</p>
              <h1>A New Route</h1>
            </div>

            <p>
              It is a period of late nights. Rebel routes, striking from a
              hidden API, have won their first victory against the evil
              Galactic Four-Oh-Four.
            </p>

            <p>
              During the battle, Axios spies managed to steal secret plans to
              the Empire’s ultimate pseudo code, the DEATH POST, an armored collection
              station with enough power to destroy an entire database.
            </p>

            <p>
              Pursued by the Empire’s sinister components, Princess Passport races home
              aboard her ajax call, custodian of the stolen plans that can save
              her JSON and restore freedom to the MongoDB galaxy.
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default StarWars;
