import React from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
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

export default class DatesFilter extends React.Component {
  state = {
    isOpened: false,
    startDate: null,
    endDate: null,
    selectedStartDate: null,
    selectedEndDate: null,
    focusedInput: "startDate"
  };

  onToggle = isOpened => {
    this.setState({ isOpened });
  };

  onApply = () => {
    this.setState({
      isOpened: false,
      startDate: this.state.selectedStartDate,
      endDate: this.state.selectedEndDate
    });
    this.props.onApply(
      this.state.selectedStartDate,
      this.state.selectedEndDate
    );
  };

  onCancel = () => {
    this.setState({
      isOpened: false,
      selectedStartDate: this.state.startDate,
      selectedEndDate: this.state.endDate
    });
  };

  onToggle = isOpened => {
    this.setState({ isOpened });
  };

  focusedInput = focusedInput => {
    this.setState({ focusedInput: focusedInput || "startDate" });
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({
      selectedStartDate: startDate,
      selectedEndDate: endDate
    });
  };

  render() {
    return (
      <DropDown
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
              isOpened={
                !this.state.checkedStartDate && !this.state.checkedEndDate
              }
            >
              {"Check in"}
            </CheckTitle>
            <Arrow src={arrow} />
            <CheckTitle
              isOpened={
                this.state.checkedStartDate && !this.state.checkedEndDate
              }
            >
              {"Check out"}
            </CheckTitle>
          </CheckedContainer>
        </MobileOnly>
        <DateRangePicker
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.focusedInput(focusedInput)}
          startDate={this.state.selectedStartDate}
          endDate={this.state.selectedEndDate}
          onDatesChange={this.onDatesChange}
        />
      </DropDown>
    );
  }
}
