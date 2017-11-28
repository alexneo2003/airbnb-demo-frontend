import React from "react";
import entireHome from "./entire-home.svg";
import privateRoom from "./private-room.svg";
import sharedRoom from "./shared-room.svg";
import switchBtn from "./switch-btn.svg";
import checkbox from "./checkbox.svg";
import dropdown from "./arrow-down.svg";
import styled from "styled-components";
import Media from "../../Media";
import Filter from "./Filter";
import Rheostat from "rheostat";
import { Minus, Plus } from "../../styled";

const Container = styled.div`
  padding: 24px;
  overflow-y: auto;
  height: calc(100vh - 264px);
  ${Media.mobile`
    height: calc(100vh - 48px);  
    width: 100%;
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
  padding-top: 20px;
  padding-bottom: 20px;
  background: #ffffff;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  margin-bottom: ${props => props.marginBottom};
`;

const OptionsRow = styled.div`
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: ${props => props.marginRight};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`;

const SectionTitle = styled.div`
  font-size: 20px;
  ${Media.mobile`
    font-size: 18px;
  `};
`;

const OptionsContainer = styled.div``;

const OptionsTitle = styled.div`
  font-size: 18px;
  font-family: CircularLight;
  ${Media.mobile`
    font-size: 16px;
  `};
`;

const OptionsSubTitle = styled.div`
  font-size: 14px;
  font-family: CircularLight;
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  ${Media.mobile`
    font-size: 12px;
  `};
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
    top: 4px;
    margin-left: 2px;
  }
`;

const CounterContainer = styled.div`
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

const EntireRoomImg = styled.div`
  width: 32px;
  height: 32px;
  background: url(${entireHome});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const PrivateRoomImg = styled(EntireRoomImg)`
  background: url(${privateRoom});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const SharedRoomImg = styled(EntireRoomImg)`
  background: url(${sharedRoom});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const CounterTitle = styled.div`
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

const CheckboxRow = styled(OptionsRow)`
  justify-content: flex-start;
`;

const Checkbox = styled.div`
  width: 24px;
  height: 24px;
  background: url(${checkbox});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const CheckboxTitle = styled(CounterTitle)`
  margin-left: 12px;
  margin-right: 0px;
`;

const RheostatContent = styled.div`
  width: 668px;
  height: 100px;
  padding-left: 24px;
  padding-right: 24px;
  ${Media.mobile`
    width: 250px;
  `};
`;
export default class Mobile extends React.Component {
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
            <SectionTitle>Room type</SectionTitle>
            <OptionsRow>
              <CheckboxRow>
                <Checkbox />
                <CheckboxTitle>Entire room</CheckboxTitle>
              </CheckboxRow>
            </OptionsRow>
            <OptionsSubTitle marginLeft="36px">
              Have a place to your
            </OptionsSubTitle>
            <OptionsRow>
              <CheckboxRow>
                <Checkbox />
                <CheckboxTitle>Private room</CheckboxTitle>
              </CheckboxRow>
            </OptionsRow>
            <OptionsSubTitle marginLeft="36px">
              Have your own room and share some common spaces
            </OptionsSubTitle>
            <OptionsRow>
              <CheckboxRow>
                <Checkbox />
                <CheckboxTitle>Shared room</CheckboxTitle>
              </CheckboxRow>
            </OptionsRow>
            <OptionsSubTitle marginLeft="36px">
              Stay in a shared space, like a common room
            </OptionsSubTitle>
          </Section>
          <Section>
            <SectionTitle>Price range</SectionTitle>
            <OptionsRow>
              <OptionsTitle>$10 — $1000+</OptionsTitle>
            </OptionsRow>
            <OptionsSubTitle>The average nightly price is $75.</OptionsSubTitle>
          </Section>
          <Section>
            <SectionTitle>Rooms and beds</SectionTitle>
            <OptionsRow>
              <OptionsTitle>Bedrooms</OptionsTitle>
              <CounterContainer>
                <Minus />
                <CounterTitle>0+</CounterTitle>
                <Plus />
              </CounterContainer>
            </OptionsRow>
            <OptionsRow>
              <OptionsTitle>Beds</OptionsTitle>
              <CounterContainer>
                <Minus />
                <CounterTitle>0+</CounterTitle>
                <Plus />
              </CounterContainer>
            </OptionsRow>
            <OptionsRow>
              <OptionsTitle>Bathrooms</OptionsTitle>
              <CounterContainer>
                <Minus />
                <CounterTitle>0+</CounterTitle>
                <Plus />
              </CounterContainer>
            </OptionsRow>
          </Section>
          <Section>
            <SectionTitle>More options</SectionTitle>
            <OptionsRow>
              <OptionsContainer>
                <OptionsTitle>Instant Book</OptionsTitle>
                <OptionsSubTitle marginTop="8px" marginBottom="8px">
                  Secure a reservation
                </OptionsSubTitle>
                <MoreTitle>Learn more</MoreTitle>
              </OptionsContainer>
              <Switch />
            </OptionsRow>
            <OptionsRow marginTop="24px" marginBottom="16px">
              <OptionsContainer>
                <OptionsTitle>Superhost</OptionsTitle>
                <OptionsSubTitle>Stay with recognized hosts.</OptionsSubTitle>
                <MoreTitle>Learn more</MoreTitle>
              </OptionsContainer>
              <Switch />
            </OptionsRow>
          </Section>
          <Section>
            <OptionsRow marginRight="20px" marginBottom="16px">
              <SectionTitle>Amenities</SectionTitle>
              <SeeAll>See all</SeeAll>
            </OptionsRow>
          </Section>
          <Section marginBottom="64px">
            <OptionsRow marginRight="20px" marginBottom="16px">
              <SectionTitle>Facilities</SectionTitle>
              <SeeAll>See all</SeeAll>
            </OptionsRow>
          </Section>
        </Container>
      </Filter>
    );
  }
}
