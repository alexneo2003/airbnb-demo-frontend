import React from "react";
import styled from "styled-components";
import Media, { MobileOnly } from "../../../Media";
import switchBtn from "./switch-btn.svg";

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
  margin-right: 260px;
  align-items: center;
  ${Media.mobile`
    margin-right: 0px;
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
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Switch = styled.div`
  width: 66px;
  height: 40px;
  background: url(${switchBtn});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const MoreTitle = styled(OptionsSubTitle)`
  color: #0f7276;
`;

export class MoreOptions extends React.Component {
  render() {
    return (
      <Section>
        <SectionTitle>More options</SectionTitle>
        <MobileOnly>
          <Row>
            <OptionsContainer>
              <OptionsTitle>Instant Book</OptionsTitle>
              <OptionsSubTitle>Secure a reservation</OptionsSubTitle>
              <MoreTitle>Learn more</MoreTitle>
            </OptionsContainer>
            <Switch />
          </Row>
        </MobileOnly>
        <Row>
          <OptionsContainer>
            <OptionsTitle>Superhost</OptionsTitle>
            <OptionsSubTitle>Stay with recognized hosts.</OptionsSubTitle>
            <MoreTitle>Learn more</MoreTitle>
          </OptionsContainer>
          <Switch />
        </Row>
      </Section>
    );
  }
}
