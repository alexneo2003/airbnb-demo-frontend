import React from "react";
import entireHome from "./entire-home.svg";
import privateRoom from "./private-room.svg";
import sharedRoom from "./shared-room.svg";
import styled from "styled-components";
import Media, { TabletFrom } from "../../../Media";
import { Checkbox } from "../checkbox";

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
  padding-top: 4px;
  ${Media.mobile`  
    font-size: 12px;
  `};
`;

const EntireRoomImg = styled.div`
  width: 32px;
  height: 32px;
  justify-content: flex-end;
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
  justify-content: flex-start;
`;

const CheckboxTitle = styled(CounterTitle)`
  margin-left: 6px;
  margin-right: 0px;
`;

export const Col = styled.div`
  box-sizing: border-box;
`;

export class RoomType extends React.Component {

  onCheckboxChange = (e, id) => {
    this.props.onChange(e, id);
  };

  render() {
    return (
      <Section>
        <SectionTitle>Room type</SectionTitle>
        <Row>
          <Col>
            <CheckboxRow>
              <Checkbox
                id="entire"
                isChecked={this.props.roomType.entire}
                onChange={this.onCheckboxChange}
              />
              <CheckboxTitle>Entire room</CheckboxTitle>
            </CheckboxRow>
            <SubTitle>Have a place to your</SubTitle>
          </Col>
          <TabletFrom>
            <EntireRoomImg />
          </TabletFrom>
        </Row>
        <Row>
          <Col>
            <CheckboxRow>
              <Checkbox
                id="private"
                isChecked={this.props.roomType.private}
                onChange={this.onCheckboxChange}
                handleCheck={this.checkedBox}
              />
              <CheckboxTitle>Private room</CheckboxTitle>
            </CheckboxRow>
            <SubTitle>Have your own room and share some common spaces</SubTitle>
          </Col>
          <TabletFrom>
            <PrivateRoomImg />
          </TabletFrom>
        </Row>
        <Row>
          <Col>
            <CheckboxRow>
              <Checkbox
                id="shared"
                isChecked={this.props.roomType.shared}
                onChange={this.onCheckboxChange}
                handleCheck={this.checkedBox}
              />
              <CheckboxTitle>Shared room</CheckboxTitle>
            </CheckboxRow>
            <SubTitle>Stay in a shared space, like a common room</SubTitle>
          </Col>
          <TabletFrom>
            <SharedRoomImg />
          </TabletFrom>
        </Row>
      </Section>
    );
  }
}
