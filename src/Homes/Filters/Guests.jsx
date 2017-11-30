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
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      guests: {
        adults: this.props.guests.adults,
        children: this.props.guests.children,
        infants: this.props.guests.infants
      }
    };
    this.onPlus = this.onPlus.bind(this);
    this.onMinus = this.onMinus.bind(this);
  }

  onToggle = isOpened => {
    this.setState({ isOpened });
  };

  onMinus = guestType => {
    this.state.guests[guestType] >= 1
      ? this.setState({
          guests: {
            ...this.state.guests,
            [guestType]: this.state.guests[guestType] - 1
          }
        })
      : this.setState({ guests: { ...this.state.guests, [guestType]: 0 } });
  };

  onPlus = guestType => {
    this.setState({
      guests: {
        ...this.state.guests,
        [guestType]: this.state.guests[guestType] + 1
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
        guests={this.state.guests}
        handleData={this.handleData}
      >
        <GuestsContainer>
          <OptionsRow>
            <OptionsTitleContainer>
              <OptionsTitle>Adults</OptionsTitle>
            </OptionsTitleContainer>
            <CounterContainer>
              <Minus onClick={() => this.onMinus("adults")} />
              <CounterTitle>{this.state.guests.adults}</CounterTitle>
              <Plus onClick={() => this.onPlus("adults")} />
            </CounterContainer>
          </OptionsRow>
          <OptionsRow>
            <OptionsTitleContainer>
              <OptionsTitle>Children</OptionsTitle>
              <OptionsSubTitle>Ages 2 - 12</OptionsSubTitle>
            </OptionsTitleContainer>
            <CounterContainer>
              <Minus onClick={() => this.onMinus("children")} />
              <CounterTitle>{this.state.guests.children}</CounterTitle>
              <Plus onClick={() => this.onPlus("children")} />
            </CounterContainer>
          </OptionsRow>
          <OptionsRow>
            <OptionsTitleContainer>
              <OptionsTitle>Infants</OptionsTitle>
              <OptionsSubTitle>Under 2</OptionsSubTitle>
            </OptionsTitleContainer>
            <CounterContainer>
              <Minus onClick={() => this.onMinus("infants")} />
              <CounterTitle>{this.state.guests.infants}</CounterTitle>
              <Plus onClick={() => this.onPlus("infants")} />
            </CounterContainer>
          </OptionsRow>
        </GuestsContainer>
      </DropDown>
    );
  }
}
