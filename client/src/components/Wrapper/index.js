import React from "react";
import "./style.css";

function Wrapper({ children, marginLeft }) {
  return (
    <div className="content-wrapper" style={{ marginLeft: (marginLeft ? marginLeft: 0 ) }}> { children }</div>
  );
}

export default Wrapper;
