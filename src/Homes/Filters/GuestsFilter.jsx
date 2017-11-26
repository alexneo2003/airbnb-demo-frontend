import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import { CounterMinus, CounterPlus } from "../../styled";

const GuestsContainer = styled.div`
  padding: 24px;
  width: 326px;
`;

const OptionsRow = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OptionsTitleContainer = styled.div`font-size: 20px;`;

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

const CounterTitle = styled.div`
  font-size: 18px;
  font-family: CircularLight;
  margin-left: 20px;
  margin-right: 20px;
`;

export default class extends React.Component {
  state = {
    checked: false
  };

  onToggle = checked => {
    this.setState({ checked });
  };

  onCancel = () => {
    this.props.closeDropDown();
    this.setState({
      checked: false
    });
  };

  onApply = () => {
    this.props.closeDropDown();
    this.setState({
      checked: false
    });
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
              <CounterMinus />
              <CounterTitle>0</CounterTitle>
              <CounterPlus />
            </CounterContainer>
          </OptionsRow>
          <OptionsRow>
            <OptionsTitleContainer>
              <OptionsTitle>Children</OptionsTitle>
              <OptionsSubTitle>Ages 2 - 12</OptionsSubTitle>
            </OptionsTitleContainer>
            <CounterContainer>
              <CounterMinus />
              <CounterTitle>0</CounterTitle>
              <CounterPlus />
            </CounterContainer>
          </OptionsRow>
          <OptionsRow>
            <OptionsTitleContainer>
              <OptionsTitle>Infants</OptionsTitle>
              <OptionsSubTitle>Under 2</OptionsSubTitle>
            </OptionsTitleContainer>
            <CounterContainer>
              <CounterMinus />
              <CounterTitle>0</CounterTitle>
              <CounterPlus />
            </CounterContainer>
          </OptionsRow>
        </GuestsContainer>
      </Filter>
    );
  }
}
