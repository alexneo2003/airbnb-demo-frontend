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
    dates: {
      startDate: null,
      endDate: null
    },
    focusedInput: "startDate"
  };

  onToggle = isOpened => {
    this.setState({ isOpened });
  };

  onApply = () => {
    this.setState(
      {
        isOpened: false,
        dates: {
          startDate: this.state.startDate,
          endDate: this.state.endDate
        }
      },
      () => this.updateDates(this.props.id, this.state.dates)
    );
  };

  onCancel = () => {
    this.setState(
      {
        isOpened: false,
        dates: {
          startDate: null,
          endDate: null
        }
      },
      () => this.updateDates(this.props.id, this.state.dates)
    );
  };

  focusedInput = focusedInput => {
    this.setState({ focusedInput: focusedInput || "startDate" });
  };

  onDatesChange = ({ startDate, endDate }) => {
    console.log("onDatesChange");
    console.log({ startDate: startDate, endDate: endDate });
    this.setState(
      {
        dates: {
          ...this.state.dates,
          startDate: startDate,
          endDate: endDate
        }
      },
      () => this.updateDates(this.props.id, this.state.dates)
    );
  };

  updateDates = (id, dates) => {
    console.log("updateDates");
    console.log(id, dates);
    this.props.handleData(id, dates);
  };

  render() {
    return (
      <DropDown
        id={this.props.id}
        className={this.props.className}
        title={this.props.title}
        confirmedTitle={this.props.confirmedTitle}
        onToggle={this.onToggle}
        onApply={this.onApply}
        onCancel={this.onCancel}
        dates={this.props.dates}
        handleOpen={this.props.handleOpen}
        isOpen={this.state.isOpened && this.props.id === "dates"}
      >
        <MobileOnly>
          <CheckedContainer>
            <CheckTitle
              isOpened={
                !this.state.selectedStartDate && !this.state.selectedEndDate
              }
            >
              {"Check in"}
            </CheckTitle>
            <Arrow src={arrow} />
            <CheckTitle
              isOpened={
                this.state.selectedStartDate && !this.state.selectedEndDate
              }
            >
              {"Check out"}
            </CheckTitle>
          </CheckedContainer>
        </MobileOnly>
        <DateRangePicker
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.focusedInput(focusedInput)}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={this.onDatesChange}
        />
      </DropDown>
    );
  }
}
