import React from "react";
import "./switch.css";

export class Switch extends React.Component {
  render() {
    return (
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
    );
  }
}
