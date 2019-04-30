import React from "react";
import "./style.css";

function Wrapper({ children, marginLeft, padding }) {
  return (
    <div className="content-wrapper" style={{ marginLeft: (marginLeft ? marginLeft: 0 ), padding: (padding ? padding : 0) }}> { children }</div>
  );
}

export default Wrapper;
