import React from "react";
import "./checkbox.css";

export class Checkbox extends React.Component {
  onChange = (e, id) => {
    this.props.onChange(e, id);
  };

  render() {
    return (
      <label className="control control-checkbox">
        <input
          type="checkbox"
          onChange={e => this.onChange(e, this.props.id)}
          checked={this.props.isChecked ? "checked" : ""}
        />
        <div className="control_indicator" />
      </label>
    );
  }
}
