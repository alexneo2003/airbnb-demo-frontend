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
import "./slider.css";
import { Minus, Plus } from "../../styled";

const Container = styled.div`
  padding: 24px;
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
  padding-bottom: 32px;
  background: #ffffff;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

const Row = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Media.md`
    margin-right: ${props => props.marginRight};
    margin-top: ${props => props.paddingTop};
    margin-bottom: ${props => props.paddingBottom};
  `};
`;

const SectionTitle = styled.div`
  padding-bottom: 8px;
  font-size: 20px;
`;

const OptionsContainer = styled.div``;

const OptionsTitle = styled.div`
  font-size: 18px;
  font-family: CircularLight;
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-family: CircularLight;
  margin-left: ${props => props.marginLeft};
`;

const MoreTitle = styled(SubTitle)`
  color: #0f7276;
`;

const SeeAll = styled(MoreTitle)`
  cursor: pointer;
  padding-top: 24px;
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
    top: 32px;
    margin-left: 2px;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  padding-top: 8px;
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

const CheckboxRow = styled(Row)`
  padding-top: 16px;
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
  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;
`;

export default class Tablet extends React.Component {
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
            <Row>
              <CheckboxRow>
                <Checkbox />
                <CheckboxTitle>Entire room</CheckboxTitle>
              </CheckboxRow>
              <EntireRoomImg />
            </Row>
            <SubTitle marginLeft="36px">Have a place to your</SubTitle>
            <Row>
              <CheckboxRow>
                <Checkbox />
                <CheckboxTitle>Private room</CheckboxTitle>
              </CheckboxRow>
              <PrivateRoomImg />
            </Row>
            <SubTitle marginLeft="36px">
              Have your own room and share some common spaces
            </SubTitle>
            <Row>
              <CheckboxRow>
                <Checkbox />
                <CheckboxTitle>Shared room</CheckboxTitle>
              </CheckboxRow>
              <SharedRoomImg />
            </Row>
            <SubTitle marginLeft="36px">
              Stay in a shared space, like a common room
            </SubTitle>
          </Section>
          <Section>
            <SectionTitle>Price range</SectionTitle>
            <Row>
              <OptionsTitle>$10 — $1000+</OptionsTitle>
            </Row>
            <SubTitle>The average nightly price is $75.</SubTitle>
            <RheostatContent>
              <Rheostat min={1} max={100} values={[1, 100]} />
            </RheostatContent>
          </Section>
          <Section>
            <SectionTitle>Rooms and beds</SectionTitle>
            <Row marginRight="290px">
              <OptionsTitle>Bedrooms</OptionsTitle>
              <CounterContainer>
                <Minus />
                <CounterTitle>0+</CounterTitle>
                <Plus />
              </CounterContainer>
            </Row>
            <Row marginRight="290px">
              <OptionsTitle>Beds</OptionsTitle>
              <CounterContainer>
                <Minus />
                <CounterTitle>0+</CounterTitle>
                <Plus />
              </CounterContainer>
            </Row>
            <Row marginRight="290px">
              <OptionsTitle>Bathrooms</OptionsTitle>
              <CounterContainer>
                <Minus />
                <CounterTitle>0+</CounterTitle>
                <Plus />
              </CounterContainer>
            </Row>
          </Section>
          <Section>
            <SectionTitle>More options</SectionTitle>
            <Row marginRight="260px">
              <OptionsContainer>
                <OptionsTitle>Instant Book</OptionsTitle>
                <SubTitle>Secure a reservation</SubTitle>
                <MoreTitle>Learn more</MoreTitle>
              </OptionsContainer>
              <Switch />
            </Row>
            <Row marginRight="260px" paddingTop="24px" paddingBottom="24px">
              <OptionsContainer>
                <OptionsTitle>Superhost</OptionsTitle>
                <SubTitle>Stay with recognized hosts.</SubTitle>
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
