import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Media from "../../Media";
import switchBtn from "./switch-btn.svg";
import checkbox from "./checkbox.svg";
import dropdown from "./arrow-down.svg";
import { Minus, Plus } from "../../styled";

const Container = styled.div`
  padding: 16px 24px;
  overflow-y: auto;
  height: calc(100vh - 264px);
  ${Media.mobile`
    height: calc(100vh - 48px);  
    width: 310px;
    padding: 8px;    
  `};
  ${Media.md`
    width: 710px;    
  `};
  ${Media.lg`
    width: 630px;    
  `};
`;

const Section = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  background: #ffffff;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

const Row = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Media.md`
    margin-right: ${props => props.marginRight};
  `};
`;

const SectionTitle = styled.div`
  font-size: 20px;
`;

const OptionsContainer = styled.div``;

const OptionsTitle = styled.div`
  font-size: 18px;
  font-family: CircularLight;
`;

const OptionsSubTitle = styled.div`
  font-size: 16px;
  font-family: CircularLight;
`;

const MoreTitle = styled(OptionsSubTitle)`
  color: #0f7276;
`;

const SeeAll = styled(MoreTitle)`
  position: relative;
  color: #0f7276;
  font-family: Circular;
  &:after {
    visibility: visible;
    position: absolute;
    content: "";
    background: url(${dropdown}) no-repeat 5px;
    width: 22px;
    height: 7px;
    top: 8px;
    margin-left: 2px;
  }
`;

const Counters = styled.div`
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

const Title = styled.div`
  white-space: nowrap;
  font-size: 18px;
  font-family: CircularLight;
  margin-left: 20px;
  margin-right: 20px;
`;

const CheckboxColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const CheckboxRow = styled(Row)`
  justify-content: flex-start;
`;

const Checkbox = styled.div`
  width: 24px;
  height: 24px;
  background: url(${checkbox});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const CheckboxOriginal = styled.input.attrs({
  type: "checkbox",
  name: "check"
})`
  position: relative;
  width: 24px;
  height: 24px;
  color: #fff;
  background-color: #008489;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  text-align: center;
  border-color: #008489;
`;
/*
.squaredThree {
  width: 20px;
  position: relative;
  margin: 20px auto;
  label {
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(top, #222 0%, #45484d 100%);
    border-radius: 4px;
    box-shadow: inset 0px 1px 1px rgba(0,0,0,0.5), 0px 1px 0px rgba(255,255,255,.4);
    &:after {
      content: '';
      width: 9px;
      height: 5px;
      position: absolute;
      top: 4px;
      left: 4px;
      border: 3px solid #fcfff4;
      border-top: none;
      border-right: none;
      background: transparent;
      opacity: 0;
      transform: rotate(-45deg);
    }
    &:hover::after {
      opacity: 0.3;
    }
  }
  input[type=checkbox] {
    visibility: hidden;
    &:checked + label:after {
      opacity: 1;
    }    
  }
}
/* end .squaredThree */

const CheckboxTitle = styled(Title)`
  margin-left: 12px;
  margin-right: 0px;
`;

export default class extends React.Component {
  state = {
    checked: false,
    moreFilters: false
  };

  onToggle = ({ checked, moreFilters }) => {
    this.setState({ checked, moreFilters });
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
        moreFilters={this.props.moreFilters}
      >
        <Container>
          <Section>
            <SectionTitle>Rooms and beds</SectionTitle>
            <Row marginRight="290px">
              <OptionsTitle>Bedrooms</OptionsTitle>
              <Counters>
                <Minus />
                <Title>0+</Title>
                <Plus />
              </Counters>
            </Row>
            <Row marginRight="290px">
              <OptionsTitle>Beds</OptionsTitle>
              <Counters>
                <Minus />
                <Title>0+</Title>
                <Plus />
              </Counters>
            </Row>
            <Row marginRight="290px">
              <OptionsTitle>Bathrooms</OptionsTitle>
              <Counters>
                <Minus />
                <Title>0+</Title>
                <Plus />
              </Counters>
            </Row>
          </Section>
          <Section>
            <SectionTitle>More options</SectionTitle>
            <Row marginRight="260px">
              <OptionsContainer>
                <OptionsTitle>Superhost</OptionsTitle>
                <OptionsSubTitle>Stay with recognized hosts.</OptionsSubTitle>
                <MoreTitle>Learn more</MoreTitle>
              </OptionsContainer>
              <Switch />
            </Row>
          </Section>
          <Section>
            <SectionTitle>Amenities</SectionTitle>
            <Row>
              <CheckboxColumn>
                <CheckboxRow>
                  <Checkbox />
                  <CheckboxTitle>Heating</CheckboxTitle>
                </CheckboxRow>
                <CheckboxRow>
                  <Checkbox />
                  <CheckboxTitle>TV</CheckboxTitle>
                </CheckboxRow>
              </CheckboxColumn>
              <CheckboxColumn>
                <CheckboxRow>
                  <Checkbox />
                  <CheckboxTitle>Kitchen</CheckboxTitle>
                </CheckboxRow>
                <CheckboxRow>
                  <Checkbox />
                  <CheckboxTitle>Wireless Internet</CheckboxTitle>
                </CheckboxRow>
              </CheckboxColumn>
            </Row>
            <SeeAll>See all amenities</SeeAll>
          </Section>
          <Section>
            <SectionTitle>Facilities</SectionTitle>
            <Row>
              <CheckboxColumn>
                <CheckboxRow>
                  <Checkbox />
                  <CheckboxTitle>Elevator</CheckboxTitle>
                </CheckboxRow>
                <CheckboxRow>
                  <Checkbox />
                  <CheckboxTitle>Pool</CheckboxTitle>
                </CheckboxRow>
              </CheckboxColumn>
              <CheckboxColumn>
                <CheckboxRow>
                  <Checkbox />
                  <CheckboxTitle>Free parking on premises</CheckboxTitle>
                </CheckboxRow>
                <CheckboxRow>
                  <Checkbox />
                  <CheckboxTitle>Wheelchair accessible</CheckboxTitle>
                </CheckboxRow>
              </CheckboxColumn>
            </Row>
            <SeeAll>See all facilities</SeeAll>
          </Section>
        </Container>
      </Filter>
    );
  }
}
