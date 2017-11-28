import React from "react";
import entireHome from "./entire-home.svg";
import privateRoom from "./private-room.svg";
import sharedRoom from "./shared-room.svg";
import switchBtn from "./switch-btn.svg";
import checkbox from "./checkbox.svg";
import dropdown from "./arrow-down.svg";
import styled from "styled-components";
import Media from "../../../Media";

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
  margin-left: 36px;
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

export class RoomType extends React.Component {
  render() {
    return (
      <Section>
        <SectionTitle>Room type</SectionTitle>
        <Row>
          <CheckboxRow>
            <Checkbox />
            <CheckboxTitle>Entire room</CheckboxTitle>
          </CheckboxRow>
          <EntireRoomImg />
        </Row>
        <SubTitle>Have a place to your</SubTitle>
        <Row>
          <CheckboxRow>
            <Checkbox />
            <CheckboxTitle>Private room</CheckboxTitle>
          </CheckboxRow>
          <PrivateRoomImg />
        </Row>
        <SubTitle>Have your own room and share some common spaces</SubTitle>
        <Row>
          <CheckboxRow>
            <Checkbox />
            <CheckboxTitle>Shared room</CheckboxTitle>
          </CheckboxRow>
          <SharedRoomImg />
        </Row>
        <SubTitle>Stay in a shared space, like a common room</SubTitle>
      </Section>
    );
  }
}
