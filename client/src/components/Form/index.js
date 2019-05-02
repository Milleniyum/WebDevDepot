import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="control">
      <input className="input" type="text" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="control">
      <textarea className="textarea" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <div className="control">
      <button {...props} className="button is-link">
        {props.children}
      </button>
    </div>
  );
}

export function DropDown(props) {
  return (
    <div className="control">
      <div className="select">
        <select {...props}>
          {props.options.map(opt => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
