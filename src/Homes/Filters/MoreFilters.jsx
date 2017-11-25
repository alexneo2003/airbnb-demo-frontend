import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import { MobileOnly } from "../../Media";
import switchBtn from "./switch-btn.svg";
import { CounterMinus, CounterPlus } from "../../styled";

const Container = styled.div`
  padding: 24px;
  width: 326px;
`;

const Section = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  background: #ffffff;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

const OptionsRow = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.div`font-size: 20px;`;

const OptionsTitleContainer = styled.div``;

const OptionsTitle = styled.div`
  font-size: 18px;
  font-family: CircularLight;
`;

const OptionsSubTitle = styled.div`
  font-size: 16px;
  font-family: CircularLight;
`;

const MoreTitle = styled(OptionsSubTitle)`color: #0f7276;`;

const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Switch = styled.div`
  width: 66px;
  height: 40px;
  background: url(${switchBtn});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const CounterTitle = styled.div`
  font-size: 18px;
  font-family: CircularLight;
  margin-left: 20px;
  margin-right: 20px;
`;

export default class extends React.Component {
  state = {
    checked: false,
    adultsCounter: null,
    childrenCounter: null,
    infantsCounter: null
  };

  onToggle = checked => {
    this.setState({ checked });
  };

  onCancel = () => {
    this.props.closeDropDown();
    this.setState({
      checked: false,
      adultsCounter: this.state.adultsCounter,
      childrenCounter: this.state.childrenCounter,
      infantsCounter: this.state.childrenCounter
    });
  };

  onApply = () => {
    this.props.closeDropDown();
    this.setState({
      checked: false,
      adultsCounter: this.state.adultsCounter,
      childrenCounter: this.state.childrenCounter,
      infantsCounter: this.state.childrenCounter
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
        <Container>
          <Section>
            <SectionTitle>Rooms and beds</SectionTitle>
            <OptionsRow>
              <OptionsTitle>Bedrooms</OptionsTitle>
              <CounterContainer>
                <CounterMinus />
                <CounterTitle>0+</CounterTitle>
                <CounterPlus />
              </CounterContainer>
            </OptionsRow>
            <OptionsRow>
              <OptionsTitle>Beds</OptionsTitle>
              <CounterContainer>
                <CounterMinus />
                <CounterTitle>0+</CounterTitle>
                <CounterPlus />
              </CounterContainer>
            </OptionsRow>
            <OptionsRow>
              <OptionsTitle>Bathrooms</OptionsTitle>
              <CounterContainer>
                <CounterMinus />
                <CounterTitle>0+</CounterTitle>
                <CounterPlus />
              </CounterContainer>
            </OptionsRow>
          </Section>
          <Section>
            <SectionTitle>More options</SectionTitle>
            <OptionsRow>
              <OptionsTitleContainer>
                <OptionsTitle>Superhost</OptionsTitle>
                <OptionsSubTitle>Stay with recognized hosts.</OptionsSubTitle>
                <MoreTitle>Learn more</MoreTitle>
              </OptionsTitleContainer>
              <Switch />
            </OptionsRow>
          </Section>
        </Container>
      </Filter>
    );
  }
}
