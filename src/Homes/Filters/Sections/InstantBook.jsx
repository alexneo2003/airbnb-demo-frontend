import React from "react";
import styled from "styled-components";
import Media, { MobileOnly, TabletOnly } from "../../../Media";
import { Switch } from "../switch";

const Section = styled.div`
  padding-top: 20px;
  padding-bottom: 16px;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

const Row = styled.div`
  padding-top: 24px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  margin-right: 280px;
  align-items: center;
  ${Media.mobile`
    margin-right: 0px;
  `};
  ${Media.md`
    margin-right: 0px;
  `};
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
  font-size: 16px;
  font-family: CircularLight;
  margin-top: 8px;
  margin-bottom: 8px;
  ${Media.mobile`  
    font-size: 14px;
  `};
`;
/*
const Switch = styled.div`
  width: 66px;
  height: 40px;
  background: url(${switchBtn});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
*/
const Title = styled(OptionsSubTitle)`
  cursor: pointer;
  color: #0f7276;
`;

export default class extends React.Component {
  render() {
    return (
      <Section>
        <SectionTitle>More options</SectionTitle>
        <MobileOnly>
          <Row>
            <OptionsContainer>
              <OptionsTitle>Instant Book</OptionsTitle>
              <OptionsSubTitle>Secure a reservation</OptionsSubTitle>
              <Title>Learn more</Title>
            </OptionsContainer>
            <Switch />
          </Row>
        </MobileOnly>
        <TabletOnly>
          <Row>
            <OptionsContainer>
              <OptionsTitle>Instant Book</OptionsTitle>
              <OptionsSubTitle>Secure a reservation</OptionsSubTitle>
              <Title>Learn more</Title>
            </OptionsContainer>
            <Switch />
          </Row>
        </TabletOnly>
        <Row>
          <OptionsContainer>
            <OptionsTitle>Superhost</OptionsTitle>
            <OptionsSubTitle>Stay with recognized hosts.</OptionsSubTitle>
            <Title>Learn more</Title>
          </OptionsContainer>
          <Switch />
        </Row>
      </Section>
    );
  }
}
