import React from "react";
import styled from "styled-components";
import Media from "../../../Media";
import Rheostat from "rheostat";
import "./slider.css";

const Section = styled.div`
  padding-top: 12px;
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
  padding-bottom: 16px;
  font-size: 20px;
  ${Media.mobile`  
    font-size: 18px;
  `};
`;

const OptionsTitle = styled.div`
  padding-bottom: 8px;
  font-size: 18px;
  font-family: CircularLight;
  ${Media.mobile`  
    font-size: 16px;
  `};
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-family: CircularLight;
  margin-left: ${props => props.marginLeft};
`;

const RheostatContent = styled.div`
  width: 650px;
  height: 100px;
  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;
  ${Media.mobile`
    width: 260px;
  `};
`;

export class Price extends React.Component {
  render() {
    return (
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
    );
  }
}
