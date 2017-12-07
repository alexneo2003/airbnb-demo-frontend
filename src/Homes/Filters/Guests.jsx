import React from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import { Minus, Plus } from "../../styled";

const GuestsContainer = styled.div`
  padding: 16px 24px;
  width: 278px;
`;

const OptionsRow = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OptionsTitleContainer = styled.div`
  font-size: 20px;
`;

const OptionsTitle = styled.div`
  font-size: 20px;
  height: 100%;
`;
const OptionsSubTitle = styled.div`
  padding-top: 8px;
  font-family: CircularLight;
  font-size: 16px;
`;

const Counters = styled.div`
  width: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Count = styled.span`
  font-size: 18px;
  font-family: CircularLight;
`;

export default class extends React.Component {
  state = {
    isOpened: false,
    guests: {
      adults: 1,
      children: 0,
      infants: 0,
      total: 0
    }
  };

  onToggle = isOpened => {
    this.setState({ isOpened });
  };

  onMinus = guestType => {
    this.setState(
      {
        guests: {
          ...this.state.guests,
          [guestType]: this.state.guests[guestType] - 1
        }
      },
      () => this.updateGuests(this.state.guests)
    );
  };

  onPlus = guestType => {
    this.setState(
      {
        guests: {
          ...this.state.guests,
          [guestType]: this.state.guests[guestType] + 1
        }
      },
      () => this.updateGuests(this.state.guests)
    );
  };

  onCancel = () => {
    this.setState(
      {
        isOpened: false,
        guests: {
          adults: 1,
          children: 0,
          infants: 0,
          total: 0
        }
      },
      () => this.updateGuests(this.state.guests)
    );
  };

  onApply = () => {
    this.setState({ isOpened: false }, () =>
      this.updateGuests(this.state.guests)
    );
  };

  updateGuests = guests => {
    this.updateTotal();
    this.props.handleData(this.props.id, guests);
  };

  updateTotal = () => {
    this.setState({
      guests: {
        ...this.state.guests,
        total:
          this.state.guests.adults +
          this.state.guests.children +
          this.state.guests.infants
      }
    });
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
        total={this.state.guests.total}
        onTotalChange={this.updateTotal}
        handleOpen={this.props.handleOpen}
      >
        <GuestsContainer>
          <OptionsRow>
            <OptionsTitleContainer>
              <OptionsTitle>Adults</OptionsTitle>
            </OptionsTitleContainer>
            <Counters>
              <Minus
                onClick={() => this.onMinus("adults")}
                disabled={this.props.guests.adults <= 1}
              />
              <Count>{this.props.guests.adults}</Count>
              <Plus onClick={() => this.onPlus("adults")} />
            </Counters>
          </OptionsRow>
          <OptionsRow>
            <OptionsTitleContainer>
              <OptionsTitle>Children</OptionsTitle>
              <OptionsSubTitle>Ages 2 - 12</OptionsSubTitle>
            </OptionsTitleContainer>
            <Counters>
              <Minus
                onClick={() => this.onMinus("children")}
                disabled={this.props.guests.children === 0}
              />
              <Count>{this.props.guests.children}</Count>
              <Plus onClick={() => this.onPlus("children")} />
            </Counters>
          </OptionsRow>
          <OptionsRow>
            <OptionsTitleContainer>
              <OptionsTitle>Infants</OptionsTitle>
              <OptionsSubTitle>Under 2</OptionsSubTitle>
            </OptionsTitleContainer>
            <Counters>
              <Minus
                onClick={() => this.onMinus("infants")}
                disabled={this.props.guests.infants === 0}
              />
              <Count>{this.props.guests.infants}</Count>
              <Plus onClick={() => this.onPlus("infants")} />
            </Counters>
          </OptionsRow>
        </GuestsContainer>
      </DropDown>
    );
  }
}
