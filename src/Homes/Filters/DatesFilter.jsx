import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import DateRangePicker from "./DateRangePicker";
import { MobileOnly } from "../../Media";
import arrow from "./arrow.svg";

const CheckedContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

const CheckTitle = styled.div`
  font-size: 18px;
  margin: 8px;
  color: ${props => (props.checked ? "#0F7276" : "#636363")};
  border-bottom: 1px solid ${props => (props.checked ? "#008489" : "#fff")};
`;

const Arrow = styled.img``;

export default class extends React.Component {
  state = {
    checked: false,
    startDate: null,
    endDate: null,
    focusedInput: "startDate",
    checkedStartDate: null,
    checkedEndDate: null
  };

  onToggle = checked => {
    this.setState({ checked });
  };

  onCancel = () => {
    this.props.closeDropDown();
    this.setState({
      checked: false,
      checkedStartDate: this.state.startDate,
      checkedEndDate: this.state.endDate
    });
  };

  onApply = () => {
    this.props.closeDropDown();
    this.setState({
      checked: false,
      startDate: this.state.checkedStartDate,
      endDate: this.state.checkedEndDate
    });
    this.props.onApply(this.state.checkedStartDate, this.state.checkedEndDate);
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ checkedStartDate: startDate, checkedEndDate: endDate });
  };

  onFocusChange = ({ focusedInput }) => {
    this.setState({ focusedInput: focusedInput || "startDate" });
  };

  render() {
    return (
      <Filter
        className={this.props.className}
        title={this.props.title}
        checkedTitle={this.props.checkedTitle}
        onToggle={this.onToggle}
        onApply={this.onApply}
        onCancel={this.onCancel}
      >
        <MobileOnly>
          <CheckedContainer>
            <CheckTitle
              checked={
                !this.state.checkedStartDate && !this.state.checkedEndDate
              }
            >
              {"Check in"}
            </CheckTitle>
            <Arrow src={arrow} />
            <CheckTitle
              checked={
                this.state.checkedStartDate && !this.state.checkedEndDate
              }
            >
              {"Check out"}
            </CheckTitle>
          </CheckedContainer>
        </MobileOnly>
        <DateRangePicker
          focusedInput={this.state.focusedInput}
          onFocusChange={this.onFocusChange}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={this.onDatesChange}
        />
      </Filter>
    );
  }
}
