import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CounterTitle = styled.span`
  font-size: 18px;
  font-family: CircularLight;
  padding-left: 20px;
  padding-right: 20px;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      isEnabled: false,
      adults: 0,
      children: 3,
      infants: 0
    };
    this.onMinus = this.onMinus.bind(this);
    this.onPlus = this.onPlus.bind(this);
    this.handlingEnable = this.handlingEnable.bind(this);
  }

  onToggle = isOpened => {
    this.setState({ isOpened });
  };

  onCancel = () => {
    this.props.closeDropDown();
    this.setState({
      isOpened: false
    });
  };

  onApply = () => {
    this.props.closeDropDown();
    this.setState({
      isOpened: false
    });
  };

  onMinus = guestType => {
    this.setState({ [guestType]: this.state[guestType] - 1 });
    this.handlingEnable(guestType);
  };

  onPlus = guestType => {
    this.setState({ [guestType]: this.state[guestType] + 1 });
    this.handlingEnable(guestType);
  };

  handlingEnable = guestType => {
    console.log(this.state[guestType]);
    console.log(this.state.isEnabled);
    return this.state[guestType] <= 0
      ? this.setState({ isEnabled: false })
      : this.setState({ isEnabled: true });
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
        <GuestsContainer>
          <OptionsRow>
            <OptionsTitleContainer>
              <OptionsTitle>Adults</OptionsTitle>
            </OptionsTitleContainer>
            <CounterContainer>
              <Minus
                isEnabled={this.state.isEnabled}
                onClick={() => this.onMinus("adults")}
              />
              <CounterTitle>{this.state.adults}</CounterTitle>
              <Plus onClick={() => this.onPlus("adults")} />
            </CounterContainer>
          </OptionsRow>
          <OptionsRow>
            <OptionsTitleContainer>
              <OptionsTitle>Children</OptionsTitle>
              <OptionsSubTitle>Ages 2 - 12</OptionsSubTitle>
            </OptionsTitleContainer>
            <CounterContainer>
              <Minus
                isEnabled={this.state.isEnabled}
                onClick={() => this.onMinus("children")}
              />
              <CounterTitle>{this.state.children}</CounterTitle>
              <Plus onClick={() => this.onPlus("children")} />
            </CounterContainer>
          </OptionsRow>
          <OptionsRow>
            <OptionsTitleContainer>
              <OptionsTitle>Infants</OptionsTitle>
              <OptionsSubTitle>Under 2</OptionsSubTitle>
            </OptionsTitleContainer>
            <CounterContainer>
              <Minus
                isEnabled={this.state.isEnabled}
                onClick={() => this.onMinus("infants")}
              />
              <CounterTitle>{this.state.infants}</CounterTitle>
              <Plus onClick={() => this.onPlus("infants")} />
            </CounterContainer>
          </OptionsRow>
        </GuestsContainer>
      </Filter>
    );
  }
}
