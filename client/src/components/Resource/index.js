import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Resource(props) {
    return (
      <div className="card" style={{ width: "200px", height: "200px" }}>
            <div className="card-content">
              <p>
                <a
                  href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia - Cascading Style Sheets
                </a>
              </p>
            </div>
            <footer className="card-footer">
              <Link to="" className="card-footer-item">
                <span className="icon">
                  <i className="fas fa-check" style={{ color: "green" }} />
                </span>
              </Link>
              <Link to="" className="card-footer-item">
                <span className="icon">
                  <i className="fas fa-comment" style={{color: "white"}} />
                </span>
              </Link>
              <Link to="" className="card-footer-item">
                <span className="icon">
              <i className={props.favorite === true ? "fas fa-star" : "far fa-star"} style={{color: (props.favorite === true ? "yellow" : "blue")}} />
                </span>
              </Link>
              <Link to="" className="card-footer-item">
                <span className="icon">
                  <i className="fas fa-thumbs-up" style={{color: "lightblue"}} />
                </span>
              </Link>
            </footer>
      </div>
      
      // <div className="card" style={{ width: "200px", height: "200px" }}>
      //       <div className="card-content">
      //         <p>
      //           <Link
      //             to="https://css-tricks.com"
      //             target="_blank"
      //             rel="noopener noreferrer"
      //           >
      //             CSS-Tricks
      //           </Link>
      //         </p>
      //       </div>
      //       <footer className="card-footer">
      //         <Link to="" className="card-footer-item">
      //           <span className="icon">
      //             <i className="fas fa-check" style={{ color: "green" }} />
      //           </span>
      //         </Link>
      //         <Link to="" className="card-footer-item">
      //           <span className="icon">
      //             <i className="fas fa-comment" style={{color: "white"}} />
      //           </span>
      //         </Link>
      //         <Link to="" className="card-footer-item">
      //           <span className="icon">
      //             <i className="far fa-star" />
      //           </span>
      //         </Link>
      //         <Link to="" className="card-footer-item">
      //           <span className="icon">
      //             <i className="far fa-thumbs-up" />
      //           </span>
      //         </Link>
      //       </footer>
      //     </div>
  
      //     <div className="card" style={{ width: "200px", height: "200px" }}>
      //       <div className="card-content">
      //         <p>
      //           <Link
      //             to="https://www.w3schools.com/css/"
      //             target="_blank"
      //             rel="noopener noreferrer"
      //           >
      //             w3schools - CSS Tutorial
      //           </Link>
      //         </p>
      //       </div>
      //       <footer className="card-footer">
      //         <Link to="" className="card-footer-item">
      //           <span className="icon">
      //             <i className="fas fa-check" />
      //           </span>
      //         </Link>
      //         <Link to="" className="card-footer-item">
      //           <span className="icon">
      //             <i className="fas fa-comment" style={{color: "white"}} />
      //           </span>
      //         </Link>
      //         <Link to="" className="card-footer-item">
      //           <span className="icon">
      //             <i className="far fa-star" />
      //           </span>
      //         </Link>
      //         <Link to="" className="card-footer-item">
      //           <span className="icon">
      //             <i className="far fa-thumbs-up" />
      //           </span>
      //         </Link>
      //       </footer>
      //     </div>
  
      //     <div className="card" style={{ width: "200px", height: "200px" }}>
      //       <div className="card-content">
      //         <p>
      //           <Link
      //             to="https://www.codecademy.com/learn/learn-css"
      //             target="_blank"
      //             rel="noopener noreferrer"
      //           >
      //             codecademy - Learn CSS
      //           </Link>
      //         </p>
      //       </div>
      //       <footer className="card-footer">
      //         <Link to="" className="card-footer-item">
      //           <span className="icon card-footer-item">
      //             <i className="fas fa-check" style={{ color: "green" }} />
      //           </span>
      //         </Link>
      //         <Link to="" className="card-footer-item">
      //           <span className="icon">
      //             <i className="fas fa-comment" style={{color: "white"}} />
      //           </span>
      //         </Link>
      //         <Link to="" className="card-footer-item">
      //           <span className="icon">
      //             <i className="fas fa-star" style={{ color: "yellow" }} />
      //           </span>
      //         </Link>
      //         <Link to="" className="card-footer-item">
      //           <span className="icon">
      //             <i className="far fa-thumbs-up" />
      //           </span>
      //         </Link>
      //       </footer>
      //     </div>
  );
}

export default Resource;
