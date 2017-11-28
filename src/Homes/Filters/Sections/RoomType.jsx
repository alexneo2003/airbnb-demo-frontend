import React from "react";
import entireHome from "./entire-home.svg";
import privateRoom from "./private-room.svg";
import sharedRoom from "./shared-room.svg";
import checkbox from "./checkbox.svg";
import styled from "styled-components";
import Media, { TabletFrom } from "../../../Media";

const Section = styled.div`
  padding-top: 20px;
  padding-bottom: 32px;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

const Row = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.div`
  padding-bottom: 8px;
  font-size: 20px;
  ${Media.mobile`  
    font-size: 18px;
  `};
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-family: CircularLight;
  margin-left: 36px;
  ${Media.mobile`  
    font-size: 12px;
  `};
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
  ${Media.mobile`  
    font-size: 16px;
  `};
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
          <TabletFrom>
            <EntireRoomImg />
          </TabletFrom>
        </Row>
        <SubTitle>Have a place to your</SubTitle>
        <Row>
          <CheckboxRow>
            <Checkbox />
            <CheckboxTitle>Private room</CheckboxTitle>
          </CheckboxRow>
          <TabletFrom>
            <PrivateRoomImg />
          </TabletFrom>
        </Row>
        <SubTitle>Have your own room and share some common spaces</SubTitle>
        <Row>
          <CheckboxRow>
            <Checkbox />
            <CheckboxTitle>Shared room</CheckboxTitle>
          </CheckboxRow>
          <TabletFrom>
            <SharedRoomImg />
          </TabletFrom>
        </Row>
        <SubTitle>Stay in a shared space, like a common room</SubTitle>
      </Section>
    );
  }
}
