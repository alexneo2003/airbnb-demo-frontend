import React from "react";
import styled from "styled-components";
import Media from "../../../Media";
import checkbox from "./checkbox.svg";
import dropdown from "./arrow-down.svg";

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
`;

const SectionTitle = styled.div`
  font-size: 20px;
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

const Title = styled.div`
  white-space: nowrap;
  font-size: 18px;
  font-family: CircularLight;
  margin-left: 20px;
  margin-right: 20px;
`;

const CheckboxTitle = styled(Title)`
  margin-left: 12px;
  margin-right: 0px;
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

export class AmenitiesFacilities extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
