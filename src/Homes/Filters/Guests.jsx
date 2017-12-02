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

const CounterContainer = styled.div`
  width: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CounterTitle = styled.span`
  font-size: 18px;
  font-family: CircularLight;
`;

export default class extends React.Component {
  state = {
    isOpened: false,
    disabled: true,
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
    !this.state.disabled &&
      this.setState(
        {
          guests: {
            ...this.state.guests,
            [guestType]: this.state.guests[guestType] - 1
          },
          disabled: this.state.guests[guestType] <= 1 ? true : false
        },
        () => this.updateGuests(this.state.guests)
      );
  };

  onPlus = guestType => {
    this.setState(
      {
        disabled: false,
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
        disabled: true,
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
    this.props.handleData(guests);
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
        className={this.props.className}
        title={this.props.title}
        checkedTitle={this.props.checkedTitle}
        onToggle={this.onToggle}
        onApply={this.onApply}
        onCancel={this.onCancel}
        total={this.state.guests.total}
        onTotalChange={this.updateTotal}
      >
        <GuestsContainer>
          <OptionsRow>
            <OptionsTitleContainer>
              <OptionsTitle>Adults</OptionsTitle>
            </OptionsTitleContainer>
            <CounterContainer>
              {this.state.disabled ? (
                <Minus onClick={() => this.onMinus("adults")} disabled />
              ) : (
                <Minus onClick={() => this.onMinus("adults")} />
              )}
              <CounterTitle>{this.props.guests.adults}</CounterTitle>
              <Plus onClick={() => this.onPlus("adults")} />
            </CounterContainer>
          </OptionsRow>
          <OptionsRow>
            <OptionsTitleContainer>
              <OptionsTitle>Children</OptionsTitle>
              <OptionsSubTitle>Ages 2 - 12</OptionsSubTitle>
            </OptionsTitleContainer>
            <CounterContainer>
              {this.state.disabled ? (
                <Minus onClick={() => this.onMinus("children")} disabled />
              ) : (
                <Minus onClick={() => this.onMinus("children")} />
              )}
              <CounterTitle>{this.props.guests.children}</CounterTitle>
              <Plus onClick={() => this.onPlus("children")} />
            </CounterContainer>
          </OptionsRow>
          <OptionsRow>
            <OptionsTitleContainer>
              <OptionsTitle>Infants</OptionsTitle>
              <OptionsSubTitle>Under 2</OptionsSubTitle>
            </OptionsTitleContainer>
            <CounterContainer>
              {this.state.disabled ? (
                <Minus onClick={() => this.onMinus("infants")} disabled />
              ) : (
                <Minus onClick={() => this.onMinus("infants")} />
              )}
              <CounterTitle>{this.props.guests.infants}</CounterTitle>
              <Plus onClick={() => this.onPlus("infants")} />
            </CounterContainer>
          </OptionsRow>
        </GuestsContainer>
      </DropDown>
    );
  }
}
