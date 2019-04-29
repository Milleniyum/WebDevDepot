import React from "react";
import { a } from "react-router-dom";
import "./style.css";

function Resource(props) {
  return (
    <div className="card">
      <div className="card-content">
        <p>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        </p>
      </div>
      <footer className="card-footer">
        <a href="/" className="card-footer-item">
          <span className="icon">
            <i
              className={
                props.clicked ? "fas fa-check clicked" : "fas fa-check"
              }
            />
          </span>
        </a>
        <a href="/" className="card-footer-item">
          <span className="icon">
            <i
              className={
                props.favorite ? "fas fa-star favorited" : "far fa-star"
              }
            />
          </span>
        </a>
        <a href="/" className="card-footer-item">
          <span className="icon">
            <i
              className={
                props.liked ? "fas fa-thumbs-up liked" : "far fa-thumbs-up"
              }
            />
          </span>
        </a>
      </footer>
    </div>

    // <div className="card" style={{ width: "200px", height: "200px" }}>
    //       <div className="card-content">
    //         <p>
    //           <a
    //             to="https://css-tricks.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             CSS-Tricks
    //           </a>
    //         </p>
    //       </div>
    //       <footer className="card-footer">
    //         <a href="/" className="card-footer-item">
    //           <span className="icon">
    //             <i className="fas fa-check" style={{ color: "green" }} />
    //           </span>
    //         </a>
    //         <a href="/" className="card-footer-item">
    //           <span className="icon">
    //             <i className="fas fa-comment" style={{color: "white"}} />
    //           </span>
    //         </a>
    //         <a href="/" className="card-footer-item">
    //           <span className="icon">
    //             <i className="far fa-star" />
    //           </span>
    //         </a>
    //         <a href="/" className="card-footer-item">
    //           <span className="icon">
    //             <i className="far fa-thumbs-up" />
    //           </span>
    //         </a>
    //       </footer>
    //     </div>

    //     <div className="card" style={{ width: "200px", height: "200px" }}>
    //       <div className="card-content">
    //         <p>
    //           <a
    //             to="https://www.w3schools.com/css/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             w3schools - CSS Tutorial
    //           </a>
    //         </p>
    //       </div>
    //       <footer className="card-footer">
    //         <a href="/" className="card-footer-item">
    //           <span className="icon">
    //             <i className="fas fa-check" />
    //           </span>
    //         </a>
    //         <a href="/" className="card-footer-item">
    //           <span className="icon">
    //             <i className="fas fa-comment" style={{color: "white"}} />
    //           </span>
    //         </a>
    //         <a href="/" className="card-footer-item">
    //           <span className="icon">
    //             <i className="far fa-star" />
    //           </span>
    //         </a>
    //         <a href="/" className="card-footer-item">
    //           <span className="icon">
    //             <i className="far fa-thumbs-up" />
    //           </span>
    //         </a>
    //       </footer>
    //     </div>

    //     <div className="card" style={{ width: "200px", height: "200px" }}>
    //       <div className="card-content">
    //         <p>
    //           <a
    //             to="https://www.codecademy.com/learn/learn-css"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             codecademy - Learn CSS
    //           </a>
    //         </p>
    //       </div>
    //       <footer className="card-footer">
    //         <a href="/" className="card-footer-item">
    //           <span className="icon card-footer-item">
    //             <i className="fas fa-check" style={{ color: "green" }} />
    //           </span>
    //         </a>
    //         <a href="/" className="card-footer-item">
    //           <span className="icon">
    //             <i className="fas fa-comment" style={{color: "white"}} />
    //           </span>
    //         </a>
    //         <a href="/" className="card-footer-item">
    //           <span className="icon">
    //             <i className="fas fa-star" style={{ color: "yellow" }} />
    //           </span>
    //         </a>
    //         <a href="/" className="card-footer-item">
    //           <span className="icon">
    //             <i className="far fa-thumbs-up" />
    //           </span>
    //         </a>
    //       </footer>
    //     </div>
  );
}

export default Resource;
