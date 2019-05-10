import React from "react";
import "./style.css";

function Welcome({ children }) {
  return (
    <React.Fragment>
      <div id="welcome-title">
        {/* <img src="/images/welcome.png" alt="welcome" /> */}
        <label>WEB DEV DEPOT</label>
      </div>
      <div id="welcome">
        {/* <p style={{ fontWeight: "bold", fontSize: "40px", fontFamily: "'Shadows Into Light', cursive", textDecoration: "underline" }}>WEB DEV DEPOT</p> */}
        <p style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>
          A WEB DEVELOPMENT RESOURCE REPOSITORY
        </p>
        <br />

        <p
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "8px",
            borderRadius: "6px"
          }}
        >
          Welcome! If you're just starting your web development journey, I hope
          you'll find everything you need to get started here. If you're an
          experienced web developer, I hope you'll find something new to learn,
          or some new resource that interests you.
        </p>
        <br />

        <div className="columns">
          <div className="column">
            <div class="card welcome-card">
              <header class="card-header">
                <p class="card-header-title">Getting Started</p>
              </header>
              <div class="card-content">
                The menu on the left lists web development categories. Each category you click on will display resources for you to explore. If you'd like to keep track of what resources you've seen, save your favorites and share likes, please login/register. Logging in will also allow you to contact the administrator to report bugs, suggest a site to add, or just say hello!
              </div>
            </div>
          </div>
          <div className="column">
            <div class="card welcome-card">
              <header class="card-header">
                <p class="card-header-title">About the Author</p>
              </header>
              <div class="card-content">
                <p>This web app was created by Jamie DeLong using the MERN stack:</p><br/>
                <p>
                <span>
                <i class="icon devicon-mongodb-plain-wordmark colored"></i>
                  </span>
                </p>
                <p>

                  <i class="icon devicon-express-original-wordmark"></i>
                </p>
<p>
                  <span><i class="icon devicon-react-original"></i></span>
                </p>
                <p>
                  <span><i class="icon devicon-nodejs-plain-wordmark"></i></span>
                  </p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    Website <br/>
                    <a href="https://milleniyum.github.io/Portfolio/">
                      Jamie DeLong
                    </a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                    Projects <a href="https://github.com/Milleniyum">Github</a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                    Networking <a href="www.linkedin.com/in/jamieldelong">LinkedIn</a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Welcome;
