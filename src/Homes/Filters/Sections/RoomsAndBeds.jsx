import React from "react";
import styled from "styled-components";
import Media from "../../../Media";
import { Minus, Plus } from "../../../styled";

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
  margin-right: 290px;
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
`;

const Counters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Count = styled.div`
  white-space: nowrap;
  font-size: 18px;
  font-family: CircularLight;
  margin-left: 20px;
  margin-right: 20px;
`;

export class RoomsAndBeds extends React.Component {
  render() {
    return (
      <Section>
        <SectionTitle>Rooms and beds</SectionTitle>
        <Row>
          <OptionsTitle>Bedrooms</OptionsTitle>
          <Counters>
            <Minus />
            <Count>0+</Count>
            <Plus />
          </Counters>
        </Row>
        <Row>
          <OptionsTitle>Beds</OptionsTitle>
          <Counters>
            <Minus />
            <Count>0+</Count>
            <Plus />
          </Counters>
        </Row>
        <Row>
          <OptionsTitle>Bathrooms</OptionsTitle>
          <Counters>
            <Minus />
            <Count>0+</Count>
            <Plus />
          </Counters>
        </Row>
      </Section>
    );
  }
}
