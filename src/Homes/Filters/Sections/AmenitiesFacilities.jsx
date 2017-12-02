import React from "react";
import styled from "styled-components";
import checkbox from "./checkbox.svg";
import dropdown from "./arrow-down.svg";
import Media, { MobileOnly, TabletFrom } from "../../../Media";

const Section = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  ${Media.mobile`  
    padding-bottom: 64px;
  `};
`;

const SectionMobile = styled(Section)`
  padding-top: 16px;
  padding-bottom: 16px;
  &:last-child {
    margin-bottom: 54px;
  }
`;

const Row = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RowMobile = styled(Row)`
  margin-right: 20px;
`;

const SectionTitle = styled.div`
  font-size: 20px;
  ${Media.mobile`  
    font-size: 18px;
  `};
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

const CheckboxTitle = styled.div`
  margin-left: 12px;
  margin-right: 0px;
  white-space: nowrap;
  font-size: 18px;
  font-family: CircularLight;
`;

const MoreTitle = styled.div`
  font-size: 16px;
  font-family: CircularLight;
  color: #0f7276;
`;

const SeeAll = styled(MoreTitle)`
  cursor: pointer;
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
        <TabletFrom>
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
        </TabletFrom>
        <MobileOnly>
          <SectionMobile>
            <RowMobile>
              <SectionTitle>Amenities</SectionTitle>
              <SeeAll>See all</SeeAll>
            </RowMobile>
          </SectionMobile>
          <SectionMobile>
            <RowMobile>
              <SectionTitle>Facilities</SectionTitle>
              <SeeAll>See all</SeeAll>
            </RowMobile>
          </SectionMobile>
        </MobileOnly>
      </div>
    );
  }
}
