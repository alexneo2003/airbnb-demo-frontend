import React from "react";
import { DayPickerRangeController } from "react-dates";

export class DatesFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      numberOfMonths: 2
    };
  }

  onClickOutside = () => {
    this.state.setState({ selected: false });
  };

  render() {
    return (
      <div className="DayPickerRangeController ">
        <DayPickerRangeController>
          startDate = {this.state.startDate}
          endDate = {this.state.endDate}
          onDatesChange ={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })}
          focusedInput ={this.state.focusedInput}
          onFocusChange ={" "}
          {focusedInput => {
            this.setState(focusedInput);
          }}
          numberOfMonths = {this.state.numberOfMonths}
        </DayPickerRangeController>
      </div>
    );
  }
}
