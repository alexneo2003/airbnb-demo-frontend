import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import DateRangePicker from "./DateRangePicker";
import {
  formatDateTitle,
  formatCheckinTitle,
  formatCheckoutTitle
} from "./TitleFormats";

export default class extends React.Component {
  state = {
    clicked: false,
    startDate: null,
    endDate: null,
    focusedInput: null,
    selectedStartDate: null,
    selectedEndDate: null
  };

  onToggle = clicked => {
    this.setState({ clicked });
  };
  onCancel = () => {
    this.props.closeDrop();
    this.setState({
      clicked: false,
      selectedStartDate: this.state.startDate,
      selectedEndDate: this.state.endDate
    });
  };
  onApply = () => {
    this.props.closeDrop();
    this.setState({
      clicked: false,
      startDate: this.state.selectedStartDate,
      endDate: this.state.selectedEndDate
    });
    this.props.onApply(
      this.state.selectedStartDate,
      this.state.selectedEndDate
    );
  };

  render() {
    return (
      <Filter
        className={this.props.className}
        title={formatDateTitle(this.state)}
        onToggle={this.onToggle}
        onApply={this.onApply}
        onCancel={this.onCancel}
      >
        <DateRangePicker
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput =>
            this.setState({ focusedInput: focusedInput || "startDate" })}
          startDate={this.state.selectedStartDate}
          endDate={this.state.selectedEndDate}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({
              selectedStartDate: startDate,
              selectedEndDate: endDate
            });
          }}
        />
      </Filter>
    );
  }
}
